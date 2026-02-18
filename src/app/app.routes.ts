import { Routes } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'inicio' },
  {
    path: 'inicio',
    component: HomeComponent,
    title: 'Alquiladora Crystal | Renta de Mobiliario en Puebla',
    data: {
      description:
        'Renta de mobiliario para bodas y eventos en Puebla: mesas, sillas, carpas y accesorios premium con asesoria personalizada.',
    },
  },
  { path: 'home', redirectTo: 'inicio', pathMatch: 'full' },
  {
    path: 'catalogo',
    component: CatalogComponent,
    title: 'Catalogo | Alquiladora Crystal',
    data: {
      description:
        'Explora nuestro catalogo de mobiliario para eventos en Puebla: sillas, mesas, vajilla, cristaleria y equipo para exteriores.',
    },
  },
  {
    path: 'servicios',
    component: ServicesComponent,
    title: 'Servicios | Alquiladora Crystal',
    data: {
      description:
        'Servicios de renta, montaje y logistica para eventos sociales y corporativos en Puebla con mobiliario premium.',
    },
  },
  {
    path: 'contacto',
    component: ContactComponent,
    title: 'Contacto | Alquiladora Crystal',
    data: {
      description:
        'Solicita tu cotizacion de mobiliario para eventos. Atencion personalizada para bodas, eventos corporativos y celebraciones sociales.',
    },
  },
  {
    path: 'nosotros',
    component: AboutComponent,
    title: 'Nosotros | Alquiladora Crystal',
    data: {
      description:
        'Conoce nuestra mision, vision y equipo especializado en renta de mobiliario para eventos en Puebla.',
    },
  },
  { path: 'about', redirectTo: 'nosotros', pathMatch: 'full' },
  { path: '**', redirectTo: 'inicio' },
];
