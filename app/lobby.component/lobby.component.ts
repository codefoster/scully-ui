import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { MD_BUTTON_DIRECTIVES } from "@angular2-material/button";

@Component({
    moduleId: module.id,
    selector: 'lobby',
    templateUrl: 'lobby.component.html',
    styleUrls: ['lobby.component.css'],
    directives: [ ROUTER_DIRECTIVES, MD_BUTTON_DIRECTIVES ]
})
export class LobbyComponent implements OnInit {
    constructor() {

    }

    ngOnInit() { 
    }

    race() {
        // this.router.navigate(['/race']);
    }
}