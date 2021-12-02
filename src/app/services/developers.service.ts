import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}
@Injectable({
  providedIn: 'root'
})
export class DevelopersService {

  apiURL1: string = 'http://localhost:8080/miniProj/devloper';
  apiURL: string = 'http://localhost:8080/miniProj/devs';
  constructor(private http: HttpClient) { }

  readAll(): Observable<any> {
    console.log("here");
    return this.http.get(this.apiURL1);

  }

  ajouterdevloper(dev: any): Observable<any> {
    return this.http.post<any>(this.apiURL1, dev, httpOptions);
  }
  getdev(id: number): Observable<any> {
    const url = `${this.apiURL1}/${id}`;
    return this.http.get(url);
  }

  getprojects(id: number): Observable<any> {
    const url = `${this.apiURL1}/${id}`;
    return this.http.get(url + '/projectes');
  }
  supprimerDevloper(id: number) {
    const url = `${this.apiURL1}/${id}`;
    return this.http.delete(url, httpOptions);
  }
  updateDevloper(id: number, dev: any): Observable<any> {
    const url = `${this.apiURL1}/${id}`;
    return this.http.put<any>(url, dev, httpOptions);
  }
}
