import { Component, Input, OnInit } from '@angular/core';
import { Rower } from "../models";

@Component({
  selector: 'rower',
  templateUrl: './rower.component.html',
  styleUrls: ['./rower.component.css']
})
export class RowerComponent implements OnInit {
  @Input() rower: Rower;
  @Input() sessionDistance: Rower;
  constructor() { }

  ngOnInit() {

  }

  getImageUrl(name:string) {
    let result = "default";
    switch(name) {
      case "John Papa": result = "papa"; break;
      case "Dan Wahlin": result = "wahlin"; break;
      case "Brad Green": result = "green"; break;
    }
    return result;
  }

}
