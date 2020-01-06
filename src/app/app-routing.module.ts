import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RssComponent } from './components/rss/rss.component';
import { HomeComponent } from './components/home/home.component';


const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'rss', component: RssComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
