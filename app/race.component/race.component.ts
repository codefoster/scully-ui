import { Component, provide } from "@angular/core";
import { MD_TABS_DIRECTIVES } from "@angular2-material/tabs";

@Component({
    selector: "race",
    templateUrl: "app/race.component/race.component.html",
    styleUrls:["app/race.component/race.component.css"],
    directives: [MD_TABS_DIRECTIVES]
})
export class RaceComponent {
    constructor() {
    }
}

