import { Injectable, OnDestroy } from "@angular/core";
import { Observable, BehaviorSubject, ReplaySubject } from "rxjs";


@Injectable()
export class WebSocketShareService implements OnDestroy {

    private dataObject = new BehaviorSubject<string>('');

    constructor() { }
    ngOnDestroy(): void {
        this.dataObject.unsubscribe();
    }
    
    onNewValueReceive(msg: string) {        
        this.dataObject.next(msg);
    }

    getNewValue(): Observable<string> {
        return this.dataObject.asObservable();
    }
}