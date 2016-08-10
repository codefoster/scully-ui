import { Component, provide } from "@angular/core";
import { MD_TABS_DIRECTIVES } from "@angular2-material/tabs";

@Component({
    moduleId: module.id,
    selector: "session",
    templateUrl: "session.component.html",
    styleUrls:["session.component.css"],
    directives: [MD_TABS_DIRECTIVES]
})
export class SessionComponent {
    constructor() {
    }
}

