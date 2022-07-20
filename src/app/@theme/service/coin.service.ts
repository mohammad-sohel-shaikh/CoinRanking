// import { environment } from 'src/environments/environment';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders} from "@angular/common/http";
environment

@Injectable({
  providedIn: 'root'
})
export class CoinService {



  constructor(private http:HttpClient) {


  }

}
