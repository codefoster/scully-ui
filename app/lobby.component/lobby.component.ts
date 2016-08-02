import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'lobby',
    templateUrl: 'lobby.component.html',
    styleUrls: ['lobby.component.css'],
    directives: [ ROUTER_DIRECTIVES ]
})
export class LobbyComponent implements OnInit {
    constructor() {
        
    }

    ngOnInit() { }

}