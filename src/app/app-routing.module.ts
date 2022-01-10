import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'live-race',
    loadChildren: () => import('@pages/live-race/live-race.module').then(m => m.LiveRaceModule),
  },
  {
    path: 'home',
    loadChildren: () => import('@pages/home/home.module').then(m => m.HomeModule),
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
