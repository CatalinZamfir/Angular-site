import { Component, OnInit } from '@angular/core';
import {HouseAdd} from '../HouseAdd';
import {ActivatedRoute, Router} from '@angular/router';
import {HouseService} from '../house.service';

@Component({
  selector: 'app-house-edit',
  templateUrl: './house-edit.component.html',
  styleUrls: ['./house-edit.component.css']
})
export class HouseEditComponent implements OnInit {

houseToBeUpdated: HouseAdd = new HouseAdd();
  constructor(private activatedRoute: ActivatedRoute, private houseService: HouseService,
              private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.houseService.getHouseId(Number(id)).subscribe(houseFound => {
      this.houseToBeUpdated = houseFound;
      console.log(houseFound);
    });
  }

  updateHouse(): void {
    this.houseService.update(this.houseToBeUpdated).subscribe(result => {
      this.router.navigateByUrl('');
    });

  }
}
