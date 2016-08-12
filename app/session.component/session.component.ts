import { Component, provide } from "@angular/core";
import { MD_TABS_DIRECTIVES } from "@angular2-material/tabs";
import { SessionTableComponent } from '../session-table.component/session-table.component';
import { VisualComponent } from '../visual.component/visual.component';

@Component({
    moduleId: module.id,
    selector: "session",
    templateUrl: "session.component.html",
    styleUrls:["session.component.css"],
    directives: [MD_TABS_DIRECTIVES, SessionTableComponent, VisualComponent]
})
export class SessionComponent {
    rowers = [
        { Name:"Rower 1", Distance:45 },
        { Name:"Rower 2", Distance:52 },
        { Name:"Rower 3", Distance:46 }
    ];
    constructor() {
        
    }
}

