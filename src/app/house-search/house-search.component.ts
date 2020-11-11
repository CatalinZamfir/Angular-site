import { Component, OnInit } from '@angular/core';
import {HouseAdd} from '../HouseAdd';
import {HouseService} from '../house.service';

@Component({
  selector: 'app-house-search',
  templateUrl: './house-search.component.html',
  styleUrls: ['./house-search.component.css']
})
export class HouseSearchComponent implements OnInit {

  housesResults: HouseAdd[] = [];

  searchName: string;

  constructor(private houseService: HouseService) { }

  ngOnInit(): void {
  }

  searchHousesByName(): void {
    this.houseService.findHousesByName(this.searchName).subscribe(houseResult => {
      this.housesResults = houseResult;
    });
  }
}
