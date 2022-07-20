import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchdataService {

  url= "https://coinranking1.p.rapidapi.com/coins";


  constructor(private http:HttpClient) { }
  users(){
    let headers=new HttpHeaders().set('X-RapidAPI-Key','86733f4be8msh687166c46bd6b7cp10ee1djsn35f9fee51666')
      .set(
      'X-RapidAPI-Host','coinranking1.p.rapidapi.com');

      return this.http.get(this.url,{headers});
  }
}

