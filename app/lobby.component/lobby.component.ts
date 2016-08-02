import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'lobby',
    templateUrl: 'app/lobby.component/lobby.component.html',
    styleUrls: ['app/lobby.component/lobby.component.css'],
    directives: [ ROUTER_DIRECTIVES ]
})
export class LobbyComponent implements OnInit {
    constructor() {
        
    }

    ngOnInit() { }

}