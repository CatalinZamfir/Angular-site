import { Component, OnInit } from '@angular/core';
import {HouseAdd} from '../HouseAdd';
import {HouseService} from '../house.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-house-view',
  templateUrl: './house-view.component.html',
  styleUrls: ['./house-view.component.css']
})
export class HouseViewComponent implements OnInit {

  house: HouseAdd = new HouseAdd();
  constructor(private houseService: HouseService, private activatedRoutes: ActivatedRoute) {

  }

  ngOnInit(): void {
    const id = this.activatedRoutes.snapshot.paramMap.get('id');
    this.houseService.getHouseId(Number(id)).subscribe(houseResult => {
      this.house = houseResult;
    });
  }

}
