import { Component, provide, OnInit } from "@angular/core";
import { MD_TABS_DIRECTIVES } from "@angular2-material/tabs";
import { MD_BUTTON_DIRECTIVES } from "@angular2-material/button";
import { SessionTableComponent } from '../session-table.component/session-table.component';
import { VisualComponent } from '../visual.component/visual.component';
import { ApiService } from '../api.service/api.service';

@Component({
    selector: "session",
    templateUrl: "app/session.component/session.component.html",
    styleUrls:["app/session.component/session.component.css"],
    providers:[ApiService],
    directives: [MD_BUTTON_DIRECTIVES, MD_TABS_DIRECTIVES, SessionTableComponent, VisualComponent]
})
export class SessionComponent implements OnInit{
    constructor(private api:ApiService) {
    }

    ngOnInit() {
    }
}