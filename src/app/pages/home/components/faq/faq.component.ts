import { Component } from '@angular/core';

import { FaqItem } from '../../../../shared/interfaces/faq-item.interface';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css',
})
export class FaqComponent {
  protected readonly faqItems: readonly FaqItem[] = [
    {
      question: 'Como puedo hacer un pedido?',
      intro:
        'Para realizar un pedido, envianos un mensaje por WhatsApp. Nuestro equipo te solicitara la informacion necesaria para elaborar el contrato.',
      outro:
        'No es necesario visitar nuestra tienda fisica. Si necesitas ayuda, fotos o tienes alguna duda, estamos aqui para asistirte.',
    },
    {
      question: 'Cual es el metodo de entrega?',
      intro: 'Ofrecemos dos opciones convenientes para la entrega de tus pedidos:',
      bullets: [
        'Recogida en tienda: Puedes recoger tu pedido directamente en nuestro local sin costo adicional.',
        'Entrega a domicilio: El costo del flete se calcula en nuestro sistema segun la distancia del envio redondo.',
      ],
      outro:
        'Asi puedes conocer el costo exacto antes de confirmar tu pedido y elegir la opcion que mejor se adapte a tu evento.',
    },
    {
      question: 'Que documentos necesito para realizar un pedido?',
      intro:
        'Si es tu primera vez rentando con nosotros, necesitaremos los siguientes documentos:',
      bullets: [
        'INE: Identificacion oficial vigente.',
        'Comprobante domiciliario: Debe ser reciente, no mayor a 3 meses.',
      ],
      outro:
        'Al momento de firmar el contrato, podras leer todas nuestras clausulas para que estes completamente informado.',
    },
    {
      question: 'Con cuanto tiempo de anticipacion debo realizar mi pedido?',
      intro:
        'Te recomendamos realizar tu pedido con al menos 5 dias de anticipacion para garantizar disponibilidad y un servicio optimo.',
      outro:
        'En temporadas altas, lo ideal es reservar con 1 a 2 semanas de anticipacion. Puedes hacer tu pedido de forma facil y rapida por WhatsApp.',
    },
    {
      question: 'Que metodos de pago aceptan?',
      intro: 'Aceptamos varios metodos de pago para tu conveniencia:',
      bullets: [
        'Transferencias bancarias.',
        'Depositos bancarios.',
        'Pagos con tarjeta en el local.',
        'Efectivo al momento de entrega.',
      ],
      outro:
        'Si tienes dudas sobre los metodos de pago o necesitas mas informacion, contactanos y te apoyamos.',
    },
    {
      question: 'Que pasa si entrego el material danado?',
      intro:
        'Nuestro equipo revisa el material durante la recoleccion. Si se detectan danos, se calculara un costo de reparacion.',
      outro:
        'Si el dano es irreparable, se procedera a la reposicion del costo total del material. Te recomendamos revisar el equipo antes de la entrega para evitar inconvenientes.',
    },
  ];
}
