import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: 'Alquiladora Crystal | Renta de Sillas, Mesas y Mobiliario para Eventos en Puebla',
    data: {
      description:
        'Renta de sillas, mesas, carpas y mobiliario para eventos en Puebla. Bodas, XV años y eventos corporativos. Más de 30 años de experiencia. ¡Cotiza por WhatsApp!',
    },
  },
  { path: 'inicio', redirectTo: '', pathMatch: 'full' },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  {
    path: 'catalogo',
    loadComponent: () =>
      import('./pages/catalog/catalog.component').then((m) => m.CatalogComponent),
    title: 'Catálogo de Renta | Sillas, Mesas, Vajilla y Carpas – Alquiladora Crystal Puebla',
    data: {
      description:
        'Catálogo completo de renta de sillas, mesas, vajilla, cristalería, mantelería y carpas para eventos en Puebla. Precios accesibles y entrega a domicilio.',
    },
  },
  {
    path: 'servicios',
    loadComponent: () =>
      import('./pages/services/services.component').then((m) => m.ServicesComponent),
    title: 'Servicios de Renta para Eventos en Puebla | Catering, Carpas y Mobiliario – Alquiladora Crystal',
    data: {
      description:
        'Servicios de renta de mobiliario, instalación de carpas, catering y banquetes para bodas y eventos en Puebla. Montaje profesional incluido. ¡Solicita tu cotización!',
    },
  },
  {
    path: 'contacto',
    loadComponent: () =>
      import('./pages/contact/contact.component').then((m) => m.ContactComponent),
    title: 'Cotiza tu Evento en Puebla | Contacto – Alquiladora Crystal',
    data: {
      description:
        'Contacta a Alquiladora Crystal para cotizar renta de sillas, mesas, carpas y mobiliario para tu evento en Puebla. Respondemos por WhatsApp, teléfono o formulario.',
    },
  },
  {
    path: 'nosotros',
    loadComponent: () =>
      import('./pages/about/about.component').then((m) => m.AboutComponent),
    title: 'Quiénes Somos | Más de 30 Años Rentando Mobiliario en Puebla – Alquiladora Crystal',
    data: {
      description:
        'Conoce la historia y los valores de Alquiladora Crystal: más de 30 años siendo los especialistas en renta de mobiliario y logística para bodas y eventos en Puebla.',
    },
  },
  { path: 'about', redirectTo: 'nosotros', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];
