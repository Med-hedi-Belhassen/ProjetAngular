import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Developer } from 'src/app/models/developer';
import { DevelopersService } from 'src/app/services/developers.service';

@Component({
  selector: 'app-update-developers',
  templateUrl: './update-developers.component.html',
  styleUrls: ['./update-developers.component.css']
})
export class UpdateDevelopersComponent implements OnInit {
  d: Developer = new Developer();
  message = "";
  constructor(private router: Router, private devservice: DevelopersService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.devservice.getdev(this.activatedRoute.snapshot.params.id).subscribe(
      res => {
        this.d = res;
      }
    )

  }

  UpdateDevloper() {
    this.devservice.updateDevloper(this.d.idDev, this.d).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['developers']);
      },
      (error) => { alert("Problème lors de la modification !") }
    )

  }

  addDevloper() {
    this.devservice.ajouterdevloper(this.d).subscribe(
      res => {
        console.log(res);
      }
    )
    this.router.navigate(['developers']).then(() => {
      window.location.reload();
    });
  }

}
