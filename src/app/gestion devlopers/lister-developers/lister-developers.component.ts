import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Developer } from 'src/app/models/developer';
import { DevelopersService } from 'src/app/services/developers.service';

@Component({
  selector: 'app-lister-developers',
  templateUrl: './lister-developers.component.html',
  styleUrls: ['./lister-developers.component.css']
})
export class ListerDevelopersComponent implements OnInit {
  devlopers: Developer[] = [];
  constructor(private router: Router, private devservice: DevelopersService) { }

  ngOnInit(): void {
    this.devservice.readAll().subscribe(
      res => {
        console.log(res);
        this.devlopers = res._embedded.devlopers;
      }
    )
  }
  supprimerProduit(p: Developer) {
    console.log("suppppppppppppppppppppppppppppp supprimé");
    let conf = confirm("Etes-vous sûr ?");
    if (conf) {
      this.devservice.supprimerDevloper(p.idDev).subscribe(
        () => {
          console.log("produit supprimé");
          this.SuprimerProduitDuTableau(p);
        })
    }


  }
  SuprimerProduitDuTableau(dev: Developer) {
    this.devlopers.forEach((cur, index) => {
      if (dev.idDev === cur.idDev) {
        this.devlopers.splice(index, 1);
      }
    });
  }
}
