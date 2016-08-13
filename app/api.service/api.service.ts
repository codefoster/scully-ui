import { Injectable } from '@angular/core';
import config from '../config';
import { Http } from '@angular/http';
import { Session, Rower } from '../models';
import * as socketio from 'socket.io-client';

@Injectable()
export class ApiService {
    private socket: SocketIOClient.Socket;
    session: Session = new Session();
    apiUrl:string = config.serviceUrl + '/api';

    constructor(private http: Http) {
        //connect to the socket server
        this.socket = socketio.connect(config.serviceUrl);

        //stream all messages into our Rx Subject
        this.socket.on("message", d => {
            //handle socket messages
        });
    }

    start() {
        this.http.post(this.apiUrl + '/session/start', null);
    }

    end() {
        this.http.post(this.apiUrl + '/session/end', null);
    }
}