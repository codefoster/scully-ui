import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";
import { SessionTableComponent } from "../session-table/session-table.component";
import { RowerListComponent } from "../rower-list/rower-list.component";

@Component({
    selector: 'session',
    templateUrl: './session.component.html',
    styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {
    constructor(private api: ApiService) {

    }

    ngOnInit() {
    }

}
