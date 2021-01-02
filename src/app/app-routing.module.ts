import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './pages/about/about.component';
import {ContactComponent} from './pages/contact/contact.component';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:'',redirectTo:'',pathMatch:'full'},
  {path:'page',children:[
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent} ]
  },
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
