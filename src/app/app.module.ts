import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListerProjectsComponent } from './gestion projects/lister-projects/lister-projects.component';
import { UpdateProjectsComponent } from './gestion projects/update-projects/update-projects.component';
import { CreateProjectsComponent } from './gestion projects/create-projects/create-projects.component';
import { CreateDevelopersComponent } from './gestion devlopers/create-developers/create-developers.component';
import { UpdateDevelopersComponent } from './gestion devlopers/update-developers/update-developers.component';
import { ListerDevelopersComponent } from './gestion devlopers/lister-developers/lister-developers.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DetailsDevloperComponent } from './gestion devlopers/details-devloper/details-devloper.component';

@NgModule({
  declarations: [
    AppComponent,
    ListerProjectsComponent,
    UpdateProjectsComponent,
    CreateProjectsComponent,
    CreateDevelopersComponent,
    UpdateDevelopersComponent,
    ListerDevelopersComponent,
    DetailsDevloperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
