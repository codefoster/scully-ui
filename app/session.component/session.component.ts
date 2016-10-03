import { Component, provide, OnInit } from "@angular/core";
import { MD_TABS_DIRECTIVES } from "@angular2-material/tabs";
import { MD_BUTTON_DIRECTIVES } from "@angular2-material/button";
//import {MD_PROGRESS_BAR_DIRECTIVES} from '@angular2-material/progress-bar';
import {MD_TOOLBAR_DIRECTIVES} from '@angular2-material/toolbar';
import { SessionTableComponent } from '../session-table.component/session-table.component';
import { VisualComponent } from '../visual.component/visual.component';
import { ApiService } from '../api.service/api.service';

@Component({
    selector: "session",
    templateUrl: "app/session.component/session.component.html",
    styleUrls:["app/session.component/session.component.css"],
    providers:[ApiService],
    directives: [MD_BUTTON_DIRECTIVES, MD_TABS_DIRECTIVES, MD_TOOLBAR_DIRECTIVES, SessionTableComponent, VisualComponent]
})
export class SessionComponent implements OnInit{
    index: number = 0; 
    TAB_COUNT: number = 2;
    //progress: number = 0; 
    timer;
    date;
    countdownindex: number = 3;

    
    constructor(private api:ApiService) {
        // Commented out progress bar temporarily.
        // UPdate the value for the progress-bar on an interval. 
        // setInterval(() => {
        //     this.progress = (this.progress + Math.floor(Math.random() * 4) + 1) % 100; 
        // }, 200);
    }
    
    ngOnInit() {
        this.api.fetch();
    }

    countdownStart(){
        this.timer = setInterval(() => this.countdown(), 1000);
    }

    countdown() {
        if (this.countdownindex === 0) { this.countdownEnd(); }
        else { 
            document.getElementById('countdown').innerText = ""+this.countdownindex; 
            this.countdownindex--;
        }
    }

    countdownEnd(){
        clearTimeout(this.timer);
        document.getElementById('countdown').innerText = "";
        this.countdownindex = 3;
        this.date = new Date();
        this.api.start();
    }

    handleKeypress(event) { 
        switch(event.key) {
            case "Right":
                this.index = Math.min(this.index + 1, this.TAB_COUNT - 1);
                break; 
            case "Left":
                this.index = Math.max(this.index - 1, 0);
                break; 
            case "Space":
                (this.api.session.status == 'active' ? this.api.session.end() : this.api.session.start())
        }
    }
}
