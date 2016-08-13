import { Component, provide, OnInit } from "@angular/core";
import { MD_TABS_DIRECTIVES } from "@angular2-material/tabs";
import { SessionTableComponent } from '../session-table.component/session-table.component';
import { VisualComponent } from '../visual.component/visual.component';
import { ApiService } from '../api.service/api.service';

@Component({
    selector: "session",
    templateUrl: "app/session.component/session.component.html",
    styleUrls:["app/session.component/session.component.css"],
    providers:[ApiService],
    directives: [MD_TABS_DIRECTIVES, SessionTableComponent, VisualComponent]
})
export class SessionComponent implements OnInit{
    rowers = [
        { Name:"Rower 1", Distance:45 },
        { Name:"Rower 2", Distance:52 },
        { Name:"Rower 3", Distance:46 }
    ];
    
    constructor(private api:ApiService) {
        
    }

    ngOnInit() {
        
    }
}

