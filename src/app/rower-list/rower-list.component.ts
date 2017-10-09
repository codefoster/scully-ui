import { Component, Input, OnInit } from '@angular/core';
import { Rower } from "../models";

@Component({
  selector: 'rower-list',
  templateUrl: './rower-list.component.html',
  styleUrls: ['./rower-list.component.css']
})
export class RowerListComponent implements OnInit {
  @Input() rowers: Rower[];
  
  constructor() { }

  ngOnInit() {
  }

}
