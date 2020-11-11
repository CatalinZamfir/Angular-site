import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import {RouterModule} from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { FooterComponent } from './footer/footer.component';
import { HouseListComponent } from './house-list/house-list.component';
import { HouseNewComponent } from './house-new/house-new.component';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import { HouseViewComponent } from './house-view/house-view.component';
import { HouseSearchComponent } from './house-search/house-search.component';
import {MatListModule} from '@angular/material/list';
import { HouseEditComponent } from './house-edit/house-edit.component';
import { AddressViewComponent } from './address-view/address-view.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    FooterComponent,
    HouseListComponent,
    HouseNewComponent,
    HouseViewComponent,
    HouseSearchComponent,
    HouseEditComponent,
    AddressViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
