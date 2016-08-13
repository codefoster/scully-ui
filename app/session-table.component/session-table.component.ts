import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: "session-table",
    templateUrl: "app/session-table.component/session-table.component.html",
    styleUrls:["app/session-table.component/session-table.component.css"]
})
export class SessionTableComponent implements OnInit{
    @Input()
    rowers;

    constructor() {
    }

    ngOnInit() {

    }
}

