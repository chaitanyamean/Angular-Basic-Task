import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemViewComponent } from './item-view/item-view.component';
import { ApiserviceService } from './apiservice.service';
import { HttpModule } from '@angular/http';

import { HttpClientModule } from '@angular/common/http'; 


const routes: Routes=[
  {path: '', component: DashboardComponent},
  {path: 'item-data/:id/:id1', component: ItemViewComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ItemViewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
    HttpClientModule
    
  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
