import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import {HouseListComponent} from './house-list/house-list.component';
import {HouseNewComponent} from './house-new/house-new.component';
import {HouseViewComponent} from './house-view/house-view.component';
import {HouseSearchComponent} from './house-search/house-search.component';
import {HouseEditComponent} from './house-edit/house-edit.component';

export const routes: Routes = [
  { path: '', component: HouseListComponent},
  { path: 'add-house', component: HouseNewComponent},
  { path: 'house-view/:id', component: HouseViewComponent},
  { path: 'search-house', component: HouseSearchComponent},
  { path: 'house-edit/:id', component: HouseEditComponent},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
