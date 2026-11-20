# Solicitud de cotización

## Diseño acordado
Integrar selección en catálogo existente. Cada producto y variante constituye un concepto; agregar repetidos suma cantidades. Camioneta abre solicitud editable. Dos pasos: equipo y evento. Sin precios, reservas automáticas ni documentos personales. WhatsApp requiere envío del cliente. Recomendaciones opcionales mesa-redonda → mantel-redondo y mesa-tablon → mantel-tablon, sin agregar automáticamente ni afirmar medidas no confirmadas.

## Implementación
- [x] Servicio compartido con signals; selección persistida sin datos del evento, tolerante a almacenamiento no disponible y datos inválidos.
- [x] Cantidad y acción en tarjetas; confirmación accesible; acceso con camioneta desde encabezado y móvil sin tapar WhatsApp.
- [x] Ruta solicitud con edición, recomendaciones y formulario validado: nombre, fechas coherentes, modalidad, dirección del evento y montaje/comentarios.
- [x] Mensaje codificado para WhatsApp, sin envío ni borrado automático.
- [x] Pruebas de combinación, variantes, cantidades inválidas, recomendaciones y mensaje; compilación Angular y producción.

## Riesgos a verificar
SSR sin window/localStorage; cantidades positivas enteras; fechas de retiro/entrega ≤ evento ≤ devolución/recolección; selección vacía; recomendaciones desaparecen al agregar el complemento. Mantener contenido SEO y diseño actual. No publicar cambios sin petición.

Verificación: producción prerenderiza 9 rutas; npm test -- --watch=false ejecuta 9 pruebas de selección, persistencia, variantes, fechas y WhatsApp. Vista de catálogo inspeccionada en Safari. La automatización de interacción nativa se interrumpió por timeout; revisión visual móvil completa pendiente.
