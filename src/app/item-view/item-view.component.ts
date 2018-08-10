import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.css']
})
export class ItemViewComponent implements OnInit {

  id: number;
  id1: string;
  data: any;
  isLoading: boolean

  constructor(public route: ActivatedRoute, private service: ApiserviceService, public location: Location) {

    this.id= route.snapshot.params.id;

      if(route.snapshot.params.id1 === 'Book') {
        this.id1 = 'books';

      } else if(route.snapshot.params.id1 === 'House') {
        this.id1 = 'houses';

      } else {
        this.id1 = 'characters';
      }
    
   }

  ngOnInit() {
    this.isLoading = true;
    this.service.getDatabyId(this.id1, this.id).subscribe(response => {
      console.log('data', response);
      this.data = response;
      this.isLoading = false;
      
    }, error => {
      console.log(error);
      
    });
  }

  goback() {
    this.location.back(); // <-- go back to previous location
  }

}
