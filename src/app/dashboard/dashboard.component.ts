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

  constructor(public service: ApiserviceService, public route: Router) { }

  ngOnInit() {
    this.option = 'All';

    this.service.getBooksData().subscribe(data=> {
        console.log(data);
        this.book = data;
        for(let item of this.book){
          item['type']='Book';
        }        
    }, error => {
      console.log(error);
    });

    this.service.getCharatersData().subscribe(data=> {
      this.char = data;
      for(let item of this.char){
        item['type']='Charater';
      }
  }, error => {
    console.log(error);
  });

  this.service.gethouseData().subscribe(data=> {
    this.house = data;
    for(let item of this.house){
      item['type']='House';
    }    
}, error => {
  console.log(error);
  
});

setTimeout(() => {
  this.finalData = this.finalData.concat(this.book)
  this.finalData = this.finalData.concat(this.house)
  this.finalData = this.finalData.concat(this.char)
  this.finalData.sort((a,b) => a.name.localeCompare(b.name));
  this.allData = this.finalData;
  console.log(this.finalData);
  
  
}, 1000);
  }

  books() {
    this.option ='Books';
    this.finalData = [];
    this.finalData = this.book;
    this.finalData.sort((a,b) => a.name.localeCompare(b.name));
  }

  charater() {
    this.option ='Charaters';
    this.finalData = [];
    this.finalData = this.char;
    this.finalData.sort((a,b) => a.name.localeCompare(b.name));
  }

  gethouse() {
    this.option ='Houses';
    this.finalData = [];
    this.finalData = this.house;
    this.finalData.sort((a,b) => a.name.localeCompare(b.name));
  }

  all() {
    this.option = 'All';
    this.finalData = [];
    this.finalData = this.allData
  }

  view(item) {
    var splitted = item.url.split("/", 6);
    // var lastChar = item.url[item.url.length -1];
    console.log(splitted);
    // this.route.navigateByUrl("/item-data/", lastChar);
    this.route.navigate(['item-data', splitted[5],item.type]);
  }
}
// routerLink="/item-data"