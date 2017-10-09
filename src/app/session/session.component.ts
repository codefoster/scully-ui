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
    date;

    constructor(private api: ApiService) {
    }

    ngOnInit() {
    }

    start() {
        this.date = new Date();
        this.api.start();        
    }

    end() {
        this.api.end();
    }

}
