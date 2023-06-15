import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SERVER_ENDPOINT, SERVER_URL, SERVER_URL_MAP } from "../common/globals";

@Injectable({
    providedIn: 'root'
  })
export class ShareVideoService {

    constructor(private http : HttpClient) {
    }

    share(body: any) {
        let shareUrl = SERVER_URL_MAP.get(SERVER_URL.VIDEO_SHARE_URL);
        return this.http.post<any>(SERVER_ENDPOINT + shareUrl, body);
    }
}