import { Component } from '@angular/core';

@Component({
  selector: 'app-delivery-info',
  standalone: true,
  template: `
    <section aria-label="Recolección, entrega, montaje y cobertura">
      <h2>Recolección, entrega y montaje</h2>
      <p>Puedes recoger el equipo en nuestro local o solicitar entrega a domicilio.
        El flete se calcula en nuestro sistema según la distancia. Si necesitas montaje,
        indícalo al cotizar; su costo depende del equipo y del servicio contratado.</p>
      <h3>Servicio en Puebla capital y alrededores</h3>
      <p>Atendemos Puebla capital, San Andrés Cholula, Atlixco y otras localidades cercanas.
        Consulta la cobertura para tu ubicación.</p>
    </section>
  `,
  styles: `
    :host { display: block; }
    section { max-width: 1200px; margin: 24px auto; padding: 32px 24px;
      background: var(--color-bg-alt); border-radius: var(--radius-md); }
    h2, h3 { color: var(--color-blue); }
    h2 { font-family: var(--font-heading); }
    p { color: var(--color-text-secondary); max-width: 850px; }
  `,
})
export class DeliveryInfoComponent {}
