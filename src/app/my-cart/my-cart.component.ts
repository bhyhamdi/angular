import { Component, OnInit } from '@angular/core';
import { MycartServiceService } from '../mycart-service.service';
import { error } from '@angular/compiler/src/util';


@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {

  constructor(private _service:MycartServiceService) { }

  ngOnInit(): void {
   this._service.cartItemList().subscribe(
     data=>console.log("running..............."),
     error=>console.log("error occured")
   )
  }

}
