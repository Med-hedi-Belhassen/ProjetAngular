import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Developer } from 'src/app/models/developer';
import { Project } from 'src/app/models/project';
import { DevelopersService } from 'src/app/services/developers.service';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-create-projects',
  templateUrl: './create-projects.component.html',
  styleUrls: ['./create-projects.component.css']
})
export class CreateProjectsComponent implements OnInit {
  p: Project = new Project();
  devs: Developer[] = [];
  message: string = "";
  idDev = 1;
  constructor(private router: Router, private projservice: ProjectsService, private devservice: DevelopersService) { }

  ngOnInit(): void {
    this.devservice.readAll().subscribe(
      res => {
        console.log(res);
        this.devs = res._embedded.devlopers;
      }
    )
  }

  addProject() {
    console.log(this.idDev);
    this.p.devloper.idDev = this.idDev;
    console.log(this.p);
    this.projservice.ajouterProduit(this.p).subscribe(
      proj => { console.log(proj) }
    )


    this.router.navigate(['projects']).then(() => {
      window.location.reload();
    });
  }

}
