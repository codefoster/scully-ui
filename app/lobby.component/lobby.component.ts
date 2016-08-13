import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { MD_BUTTON_DIRECTIVES } from "@angular2-material/button";

@Component({
    selector: 'lobby',
    templateUrl: 'app/lobby.component/lobby.component.html',
    styleUrls: ['app/lobby.component/lobby.component.css'],
    directives: [ ROUTER_DIRECTIVES, MD_BUTTON_DIRECTIVES ]
})
export class LobbyComponent implements OnInit {
    constructor() {

    }

    ngOnInit() { 
    }

    start() {
        // this.router.navigate(['/session']);
    }
}