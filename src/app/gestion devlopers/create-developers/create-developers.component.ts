import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Developer } from 'src/app/models/developer';
import { DevelopersService } from 'src/app/services/developers.service';

@Component({
  selector: 'app-create-developers',
  templateUrl: './create-developers.component.html',
  styleUrls: ['./create-developers.component.css']
})
export class CreateDevelopersComponent implements OnInit {
  d: Developer = new Developer();
  message = "";
  constructor(private router: Router, private devservice: DevelopersService) { }

  ngOnInit(): void {
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
