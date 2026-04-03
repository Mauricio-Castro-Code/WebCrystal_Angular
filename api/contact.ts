import type { VercelRequest, VercelResponse } from '@vercel/node';

interface ContactPayload {
  readonly name: string;
  readonly email: string;
  readonly phone: string;
  readonly eventType: string;
  readonly message: string;
  readonly honeypot: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function normalizeText(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
}

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function validatePayload(payload: ContactPayload): string | null {
  if (payload.honeypot) {
    return null;
  }

  if (
    !payload.name ||
    !payload.email ||
    !payload.phone ||
    !payload.eventType ||
    !payload.message
  ) {
    return 'Completa todos los campos obligatorios.';
  }

  if (!EMAIL_PATTERN.test(payload.email)) {
    return 'Ingresa un correo electronico valido.';
  }

  if (payload.message.length < 12) {
    return 'El mensaje debe incluir al menos 12 caracteres.';
  }

  if (
    payload.name.length > 120 ||
    payload.email.length > 180 ||
    payload.phone.length > 25 ||
    payload.eventType.length > 80 ||
    payload.message.length > 2500
  ) {
    return 'Algunos campos exceden el limite permitido.';
  }

  return null;
}

export default async function handler(request: VercelRequest, response: VercelResponse) {
  if (request.method !== 'POST') {
    return response.status(405).json({ message: 'Metodo no permitido.' });
  }

  const payload: ContactPayload = {
    name: normalizeText(request.body?.name),
    email: normalizeText(request.body?.email),
    phone: normalizeText(request.body?.phone),
    eventType: normalizeText(request.body?.eventType),
    message: normalizeText(request.body?.message),
    honeypot: normalizeText(request.body?.honeypot),
  };

  const validationError = validatePayload(payload);
  if (validationError) {
    return response.status(400).json({ message: validationError });
  }

  if (payload.honeypot) {
    return response.status(200).json({ message: 'Solicitud recibida.' });
  }

  const resendApiKey = process.env.RESEND_API_KEY?.trim();
  const toEmail = process.env.CONTACT_TO_EMAIL?.trim();
  const fromEmail = process.env.CONTACT_FROM_EMAIL?.trim();

  if (!resendApiKey || !toEmail || !fromEmail) {
    console.error(
      'Missing env vars. Required: RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL.',
    );
    return response.status(503).json({
      message: 'El servicio de contacto no esta disponible temporalmente.',
    });
  }

  const emailText = [
    'Hola Alquiladora Crystal, requieren una solicitud de contacto desde la pagina web. Detalles a continuacion:',
    '',
    `Nombre: ${payload.name}`,
    `Correo: ${payload.email}`,
    `Telefono: ${payload.phone}`,
    `Tipo de evento: ${payload.eventType}`,
    '',
    'Mensaje:',
    payload.message,
  ].join('\n');

  const safeName = escapeHtml(payload.name);
  const safeEmail = escapeHtml(payload.email);
  const safePhone = escapeHtml(payload.phone);
  const safeEventType = escapeHtml(payload.eventType);
  const safeMessage = escapeHtml(payload.message).replace(/\n/g, '<br />');

  const emailHtml = `
    <h2>Nueva solicitud de contacto</h2>
    <p><strong>Nombre:</strong> ${safeName}</p>
    <p><strong>Correo:</strong> ${safeEmail}</p>
    <p><strong>Telefono:</strong> ${safePhone}</p>
    <p><strong>Tipo de evento:</strong> ${safeEventType}</p>
    <p><strong>Mensaje:</strong></p>
    <p>${safeMessage}</p>
  `;

  try {
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: payload.email,
        subject: `Cotizacion web - ${payload.eventType}`,
        text: emailText,
        html: emailHtml,
      }),
    });

    if (!resendResponse.ok) {
      const resendError = await resendResponse.text();
      console.error('Resend API error:', resendResponse.status, resendError);
      const isAuthOrSenderIssue = resendResponse.status === 401 || resendResponse.status === 403;
      const isValidationIssue = resendResponse.status === 422;

      if (isAuthOrSenderIssue || isValidationIssue) {
        return response.status(502).json({
          message:
            'No se pudo enviar la solicitud. Revisa RESEND_API_KEY y CONTACT_FROM_EMAIL (debe estar verificado en Resend).',
        });
      }

      return response.status(502).json({
        message: 'No se pudo enviar la solicitud en este momento. Intenta de nuevo.',
      });
    }

    return response.status(200).json({
      message: 'Solicitud enviada correctamente. Te contactaremos pronto.',
    });
  } catch (error) {
    console.error('Contact API error:', error);
    return response.status(500).json({
      message: 'Ocurrio un error al enviar la solicitud. Intenta de nuevo.',
    });
  }
}
