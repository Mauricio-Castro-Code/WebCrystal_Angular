# Mensaje y confianza Implementation Plan

**Goal:** Aplicar el contenido aprobado en conversación, priorizando renta de mobiliario.
**Architecture:** Conservar componentes y estilos actuales; añadir un componente estático para el caso universitario.
**Tech Stack:** Angular, HTML y CSS existentes.
**Spec:** Propuesta aprobada por el usuario en esta conversación.

## Global Constraints
- Fundación en 1991; no publicar nombre de universidad en textos.
- Aproximadamente 3,500 asistentes al evento, sin atribuir servicio para la totalidad.
- Flete según distancia; montaje solicitado al cotizar y según equipo/servicio.
- No modificar testimonios ni hitos históricos pendientes de validación.
- No publicar ni hacer commits; preservar cambios ajenos.

## Review Focus
- Textos visibles y FAQ estructurada consistentes.
- Imágenes existentes verificadas; dimensiones y carga diferida.
- Sección adaptable a móvil, con encabezado y enlaces accesibles.
- Mantener testimonios e hitos no validados sin añadir afirmaciones.
- Revisar metadatos que prometían montaje incluido.

## Tasks
- [x] Actualizar hero, barra de confianza, historia, servicios y metadatos.
- [x] Añadir caso universitario y condiciones/cobertura en inicio; alinear FAQ.
- [ ] Compilar producción, revisar diff y comprobar HTML generado y recursos.

Ruling: ejecución directa en el proyecto autorizado, sin nueva aprobación del alcance ya aprobado. Cambios editoriales y presentación estática: verificar compilación y HTML, sin pruebas unitarias que dupliquen textos.

Verification: tsc --noEmit y ngc --noEmit finalizaron con código 0. git diff --check y comprobación de recursos/textos: OK. Build de producción sin salida tras varios minutos; no confirmado. Revisión visual pendiente: no hay navegador conectado.
