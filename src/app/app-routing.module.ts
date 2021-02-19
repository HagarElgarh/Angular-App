import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
{path: 'AboutUs', component: AboutusComponent},
{path: 'ContactUs', component: ContactUsComponent},
{  path: 'admin', 
    loadChildren: () => import('./admin/admin/admin.module').then(m => m.AdminModule)
  },

{path:'Home', redirectTo:'/', pathMatch:'full'}, // Default path
{path:"**", component:NotfoundComponent} // Wildcard path];

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
