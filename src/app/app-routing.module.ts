import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateDevelopersComponent } from './gestion devlopers/create-developers/create-developers.component';
import { DetailsDevloperComponent } from './gestion devlopers/details-devloper/details-devloper.component';
import { ListerDevelopersComponent } from './gestion devlopers/lister-developers/lister-developers.component';
import { UpdateDevelopersComponent } from './gestion devlopers/update-developers/update-developers.component';
import { CreateProjectsComponent } from './gestion projects/create-projects/create-projects.component';
import { ListerProjectsComponent } from './gestion projects/lister-projects/lister-projects.component';
import { UpdateProjectsComponent } from './gestion projects/update-projects/update-projects.component';

const routes: Routes = [
  { path: "projects", component: ListerProjectsComponent },
  { path: "developers", component: ListerDevelopersComponent },
  { path: "add-projects", component: CreateProjectsComponent },
  { path: "add-devlopers", component: CreateDevelopersComponent },
  { path: "updateProject/:id", component: UpdateProjectsComponent },
  { path: "detailDevloper/:id", component: DetailsDevloperComponent },
  { path: "updateDevloper/:id", component: UpdateDevelopersComponent },
  { path: "", redirectTo: "projects", pathMatch: "full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
