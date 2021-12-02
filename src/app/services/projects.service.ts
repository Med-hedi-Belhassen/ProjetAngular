import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  apiURL: string = 'http://localhost:8080/miniProj/projects';
  apiURL1: string = 'http://localhost:8080/miniProj/rest';
  constructor(private http: HttpClient) { }

  readAll(): Observable<any> {
    console.log("here");
    return this.http.get(this.apiURL1);

  }
  getProj(id: number): Observable<any> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get(url);
  }

  getDev(id: number): Observable<any> {
    const url = `${this.apiURL1}/${id}`;
    return this.http.get(url + '/devloper');
  }
  supprimerProject(id: number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  ajouterProduit(proj: any): Observable<any> {
    return this.http.post<any>(this.apiURL, proj, httpOptions);
  }

  updateProduit(proj: any): Observable<any> {
    return this.http.put<any>(this.apiURL, proj, httpOptions);
  }

}
