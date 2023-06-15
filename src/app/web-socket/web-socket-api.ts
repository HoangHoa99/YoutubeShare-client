import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { WebSocketShareService } from './web-socket-share.service';
import { Injectable } from '@angular/core';
import { SERVER_ENDPOINT } from '../common/globals';

@Injectable()
export class WebSocketAPI {
    webSocketEndPoint: string = SERVER_ENDPOINT + '/api/ws';
    topic: string = "/topic/server-notification";
    stompClient: any;
    
    constructor(private websocketShare: WebSocketShareService){
         
    }
    connect() {
        console.log("Initialize WebSocket Connection");
        let ws = new SockJS(this.webSocketEndPoint);
        this.stompClient = Stomp.over(ws);
        const _this = this;
        _this.stompClient.connect({}, function (frame: any) {
            _this.stompClient.subscribe(_this.topic, function (sdkEvent: any) {
                _this.onMessageReceived(sdkEvent);
            });
        }, this.errorCallBack);
    };

    disconnect() {
        if (this.stompClient !== null) {
            this.stompClient.disconnect();
        }
        console.log("Disconnected");
    }

    // on error, schedule a reconnection attempt
    errorCallBack(error: string) {
        console.log("errorCallBack -> " + error)
        setTimeout(() => {
            this.connect();
        }, 5000);
    }  

    onMessageReceived(message: { body: string; }) {    
        this.websocketShare.onNewValueReceive(message.body);
    }
}