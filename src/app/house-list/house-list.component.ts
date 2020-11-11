import { Component, OnInit } from '@angular/core';
import {HouseAdd} from '../HouseAdd';
import {HouseService} from '../house.service';

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.css']
})
export class HouseListComponent implements OnInit {

  houses: HouseAdd[] = [];

  constructor(private houseService: HouseService) {}

  ngOnInit(): void {
    this.houseService.getHouses().subscribe(housesResult => {
      this.houses = housesResult;
    });

  }

  removeAdd(id: number): void {
    this.houseService.deleteHouseById(id).subscribe(succes => {
      console.log('The article has been deleted: ' + id);
      this.ngOnInit();
    });
  }
}
