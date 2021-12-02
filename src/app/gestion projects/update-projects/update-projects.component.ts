import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Developer } from 'src/app/models/developer';
import { Project } from 'src/app/models/project';
import { DevelopersService } from 'src/app/services/developers.service';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-update-projects',
  templateUrl: './update-projects.component.html',
  styleUrls: ['./update-projects.component.css']
})
export class UpdateProjectsComponent implements OnInit {
  p: Project = new Project();
  devs: Developer[] = [];
  message: string = "";
  idDev = 1;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private projservice: ProjectsService, private devservice: DevelopersService) { }

  ngOnInit(): void {
    this.devservice.readAll().subscribe(
      res => {
        console.log(res);
        this.devs = res._embedded.devlopers;
      }
    )

    this.projservice.getProj(this.activatedRoute.snapshot.params.id).subscribe(
      res => {
        this.p = res;
        this.idDev = this.p.devloper.idDev;
        console.log(res);
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
  updateProject() {
    console.log(this.p);
    this.p.devloper = new Developer();
    this.p.devloper.idDev = this.idDev;
    this.projservice.updateProduit(this.p).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['projects']);
      },
      (error) => { alert("Problème lors de la modification !") }
    )
  }
}
