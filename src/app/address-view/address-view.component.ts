import {Component, Input, OnInit} from '@angular/core';
import {Address} from '../Address';

@Component({
  selector: 'app-address-view',
  templateUrl: './address-view.component.html',
  styleUrls: ['./address-view.component.css']
})
export class AddressViewComponent implements OnInit {

  @Input('address')
  address: Address = new Address();
  constructor() { }

  ngOnInit(): void {
  }

}
