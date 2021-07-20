import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http:HttpClient) { } 
  
  /* --------- Get info people --------- */
  getPeople(){
    return this.http.get(environment.urlAddress + '/people/') 
  }

  /* --------- Get info planets --------- */
  getPlanets(){
    return this.http.get(environment.urlAddress + '/planets/') 
  }

  /* --------- Get info starships --------- */
  getStarships(){
    return this.http.get(environment.urlAddress + '/starships/') 
  }
}
