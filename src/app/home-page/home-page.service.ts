import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SERVER_ENDPOINT, SERVER_URL, SERVER_URL_MAP } from "../common/globals";

@Injectable({
    providedIn: 'root'
  })
export class HomePageService {

    constructor(private http : HttpClient) {

    }
    
    login(body: any) {
        let loginUrl = SERVER_URL_MAP.get(SERVER_URL.LOGIN_URL);
        return this.http.post<any>(SERVER_ENDPOINT + loginUrl, body);
    }

    sharedVideoList() {
        let sharedVideoList = SERVER_URL_MAP.get(SERVER_URL.VIDEO_SHARED_LIST_URL);
        return this.http.get<any>(SERVER_ENDPOINT + sharedVideoList);
    }
}