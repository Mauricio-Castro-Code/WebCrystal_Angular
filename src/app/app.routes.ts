import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'inicio' },
  {
    path: 'inicio',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: 'Alquiladora Crystal | Renta de Mobiliario en Puebla',
    data: {
      description:
        'Renta de mobiliario para bodas y eventos en Puebla: mesas, sillas, carpas y accesorios premium con asesoria personalizada.',
    },
  },
  { path: 'home', redirectTo: 'inicio', pathMatch: 'full' },
  {
    path: 'catalogo',
    loadComponent: () =>
      import('./pages/catalog/catalog.component').then((m) => m.CatalogComponent),
    title: 'Catalogo | Alquiladora Crystal',
    data: {
      description:
        'Explora nuestro catalogo de mobiliario para eventos en Puebla: sillas, mesas, vajilla, cristaleria y equipo para exteriores.',
    },
  },
  {
    path: 'servicios',
    loadComponent: () =>
      import('./pages/services/services.component').then((m) => m.ServicesComponent),
    title: 'Servicios | Alquiladora Crystal',
    data: {
      description:
        'Servicios de renta, montaje y logistica para eventos sociales y corporativos en Puebla con mobiliario premium.',
    },
  },
  {
    path: 'contacto',
    loadComponent: () =>
      import('./pages/contact/contact.component').then((m) => m.ContactComponent),
    title: 'Contacto | Alquiladora Crystal',
    data: {
      description:
        'Solicita tu cotizacion de mobiliario para eventos. Atencion personalizada para bodas, eventos corporativos y celebraciones sociales.',
    },
  },
  {
    path: 'nosotros',
    loadComponent: () =>
      import('./pages/about/about.component').then((m) => m.AboutComponent),
    title: 'Nosotros | Alquiladora Crystal',
    data: {
      description:
        'Conoce nuestra mision, vision y equipo especializado en renta de mobiliario para eventos en Puebla.',
    },
  },
  { path: 'about', redirectTo: 'nosotros', pathMatch: 'full' },
  { path: '**', redirectTo: 'inicio' },
];
