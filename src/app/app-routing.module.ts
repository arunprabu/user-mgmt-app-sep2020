import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConceptsComponent } from './concepts/components/concepts.component';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './shared/guards/auth.guard';

// configure the routes
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'concepts', component: ConceptsComponent },
  { path: 'about', component: AboutComponent, canActivate: [ AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // registering routes
  exports: [RouterModule]
})
export class AppRoutingModule { }
