import { Injectable } from '@angular/core';
//import { Observable, of } from 'rxjs';

import { HttpClient } from '@angular/common/http';

// import {Observable} from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http: HttpClient) { }
  baseurl = 'https://anapioficeandfire.com/api'


  getBooksData() { // get books service starts
    let response = this.http.get(this.baseurl + '/books');
    return response;
  }
  // get books service ends

  // get charaters service starts
  getCharatersData() {
    let response = this.http.get(this.baseurl + '/characters');
    return response;
  }
  // get charaters service ends

  // gethouse service starts
  gethouseData() {
    let response = this.http.get(this.baseurl + '/houses');
    return response;
  }
  // gethouse service ends

  // get data by id service starts
  getDatabyId(type: string, idx: number) {
    let response = this.http.get(this.baseurl + '/' + type + '/' + idx);
    return response;
  }
  // get data by id service ends

}