import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Developer } from 'src/app/models/developer';
import { Project } from 'src/app/models/project';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-lister-projects',
  templateUrl: './lister-projects.component.html',
  styleUrls: ['./lister-projects.component.css']
})
export class ListerProjectsComponent implements OnInit {
  projects: Project[] = [];
  dev = new Developer();
  constructor(private router: Router, private projservice: ProjectsService) { }

  ngOnInit(): void {
    this.projservice.readAll()
      .subscribe(
        response => {
          console.log(response);
          this.projects = response._embedded.projectses;
          console.log(this.projects)
          this.projects.forEach(element => {
            this.projservice.getDev(element.idProj).subscribe(
              res => {
                console.log(res);
                element.devloper = res;
              }
            )
            console.log(this.projects);
          });
        }

      )
  }
  supprimerProduit(p: Project) {
    console.log("suppppppppppppppppppppppppppppp supprimé");
    let conf = confirm("Etes-vous sûr ?");
    if (conf) {
      this.projservice.supprimerProject(p.idProj).subscribe(
        () => {
          console.log("produit supprimé");
          this.SuprimerProduitDuTableau(p);
        })
    }


  }
  SuprimerProduitDuTableau(proj: Project) {
    this.projects.forEach((cur, index) => {
      if (proj.idProj === cur.idProj) {
        this.projects.splice(index, 1);
      }
    });
  }
}
