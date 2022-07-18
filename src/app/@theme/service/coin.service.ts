import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
// import {environment} from 'src/environments/environment'
import { HttpClient} from "@angular/common/http";
environment

@Injectable({
  providedIn: 'root'
})
export class CoinService {

  baseUrl=environment.url;
  header=environment.headers;
  constructor(private http:HttpClient) {}
   users(){
      // return this.http.get(environment.url,{environment.headers});
  }
}
