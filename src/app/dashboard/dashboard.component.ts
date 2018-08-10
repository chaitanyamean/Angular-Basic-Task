import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  book:any= [];
  char: any= [];
  house: any=[];
  finalData: any=[];        
  allData: any =[];
  option: string;
  allDetails:any = [];
  isLoading: boolean


  constructor(public service: ApiserviceService, public route: Router) { }

  ngOnInit() {
    this.option = 'All';
    this.isLoading = true;
    this.service.getBooksData().subscribe(data=> { // get books service starts
        console.log(data);
        this.book = data;
        for(let item of this.book){
          item['type']='Book';
        }       
        this.getChar();  
    }, error => {
      console.log(error);
    }); // get books service ends
  }

  getChar() {
    this.service.getCharatersData().subscribe(data => { // get charaters service starts
      this.char = data;
      for (let item of this.char) {
        item['type'] = 'Charater';
      }
      this.getHouse();
    }, error => {
      console.log(error);
    }); // get charaters service ends
  }

  getHouse() {
    this.service.gethouseData().subscribe(data => {  // get house service starts
      this.house = data;
      for (let item of this.house) {
        item['type'] = 'House';
      }
      this.finalData = this.finalData.concat(this.book)
      this.finalData = this.finalData.concat(this.house)
      this.finalData = this.finalData.concat(this.char)
      this.finalData.sort((a, b) => a.name.localeCompare(b.name));
      this.allData = this.finalData;
      this.isLoading = false;
    }, error => {
      console.log(error);

    });  // get house service ends

  }

  books() {  //  books function starts
    this.option ='Books';
    this.finalData = [];
    this.finalData = this.book;
    this.finalData.sort((a,b) => a.name.localeCompare(b.name));
  }  //  books service ends

  charater() { //  charater function starts
    this.option ='Charaters';
    this.finalData = [];
    this.finalData = this.char;
    this.finalData.sort((a,b) => a.name.localeCompare(b.name));
  } //  charater function ends

   gethouse() { //  gethouse function starts
    this.option ='Houses';
    this.finalData = [];
    this.finalData = this.house;
    this.finalData.sort((a,b) => a.name.localeCompare(b.name));
  } //  gethouse function ends

  all() { //  all function starts
    this.option = 'All';
    this.finalData = [];
    this.finalData = this.allData
  } //  all function ends

  view(item) { //  view function starts
    var splitted = item.url.split("/", 6);
    console.log(splitted);
    this.route.navigate(['item-data', splitted[5],item.type]);
  } //  view function ends
}