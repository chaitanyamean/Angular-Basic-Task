import { Injectable } from '@angular/core';
//import { Observable, of } from 'rxjs';

import {HttpClient} from '@angular/common/http';

// import {Observable} from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http: HttpClient) { }
baseurl='https://anapioficeandfire.com/api'


getBooksData(){

 let response =  this.http.get(this.baseurl + '/books');
 return response;
}

getCharatersData(){

  let response =  this.http.get(this.baseurl + '/characters');
  return response;
 }

 gethouseData(){

  let response =  this.http.get(this.baseurl + '/houses');
  return response;
 }

 getDatabyId(type: string, idx: number) {
  let response =  this.http.get(this.baseurl + '/' + type + '/' + idx );
  return response;
 }

}