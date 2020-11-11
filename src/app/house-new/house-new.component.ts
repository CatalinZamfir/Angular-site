import { Component, OnInit } from '@angular/core';
import {HouseAdd} from '../HouseAdd';
import {HouseService} from '../house.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-house-new',
  templateUrl: './house-new.component.html',
  styleUrls: ['./house-new.component.css']
})
export class HouseNewComponent implements OnInit {
  house: HouseAdd = new HouseAdd();


  constructor(private houseService: HouseService, private router: Router) { }

  ngOnInit(): void {
  }

  addHouse(): void{
    this.houseService.addHouse(this.house).subscribe(result => {
    this.router.navigateByUrl('');
    });

  }
}
