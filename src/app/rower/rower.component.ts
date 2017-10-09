import { Component, Input, OnInit } from '@angular/core';
import { Rower } from "../models";

@Component({
  selector: 'rower',
  templateUrl: './rower.component.html',
  styleUrls: ['./rower.component.css']
})
export class RowerComponent implements OnInit {
  @Input() rower: Rower;
  constructor() { }

  ngOnInit() {

  }

}
