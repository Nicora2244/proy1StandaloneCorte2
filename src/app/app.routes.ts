import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'page2',
    loadComponent: () => import('./components/page2/page2.page').then( m => m.Page2Page)
  },
  
  {
    path: 'page2/:id',
    loadComponent: () => import('./components/page2/page2.page').then( m => m.Page2Page)
  },
  
  {
    path: 'page1',
    loadComponent: () => import('./components/page1/page1.page').then( m => m.Page1Page)
  },
  {
    path: 'details/:id',
    loadComponent: () => import('./components/pages/details/details.page').then( m => m.DetailsPage)
  },
  {
    path: 'home-defer',
    loadComponent: () => import('./components/pages/home-defer/home-defer.page').then( m => m.HomeDeferPage)
  },
  {
    path: 'episodio-detail/:id',
    loadComponent: () => import('./components/pages/episodio-detail/episodio-detail.page').then( m => m.EpisodioDetailPage)
  },
];
