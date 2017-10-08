import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";
import { SessionTableComponent } from "../session-table/session-table.component";
import { VisualComponent } from "../visual/visual.component";

@Component({
    selector: 'session',
    templateUrl: './session.component.html',
    styleUrls: ['./session.component.css'],
    providers: [ApiService]
})
export class SessionComponent implements OnInit {
    index: number = 0;
    TAB_COUNT: number = 2;
    progress: number = 0;
    timer;
    date;
    countdownindex: number = 3;

    constructor(private api: ApiService) {

    }

    ngOnInit() {
    }

    countdownStart() {
        this.timer = setInterval(() => this.countdown(), 1000);
    }

    countdown() {
        if (this.countdownindex === 0) { this.countdownEnd(); }
        else {
            document.getElementById('countdown').innerText = "" + this.countdownindex;
            this.countdownindex--;
        }
    }

    countdownEnd() {
        clearTimeout(this.timer);
        document.getElementById('countdown').innerText = "";
        this.countdownindex = 3;
        this.date = new Date();
        this.api.start();
    }

    handleKeypress(event) {
        switch (event.key) {
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
