import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'session-table',
  templateUrl: './session-table.component.html',
  styleUrls: ['./session-table.component.css']
})
export class SessionTableComponent implements OnInit {
    @Input()
    rowers;

  constructor() { }

  ngOnInit() {
  }

}
