import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'collections', loadChildren: () => import('./collections/collections.module').then(s => s.CollectionsModule)},
  {path: 'elements', loadChildren: () => import('./elements/elements.module').then(m => m.ElementsModule) },
  {path: 'views', loadChildren: () => import('./views/views.module').then(m => m.ViewsModule)},
  {path: 'mods', loadChildren: () => import('./mods/mods.module').then(m => m.ModsModule)},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})

export class AppRoutingModule { }
