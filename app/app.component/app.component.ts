import { Component, provide } from "@angular/core";
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: "app",
    templateUrl: "app.component.html",
    styleUrls: ["app.component.css"],
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
    constructor() {
    }
}

