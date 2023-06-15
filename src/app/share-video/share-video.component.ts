import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { Globals } from '../common/globals';
import { ShareVideoService } from './share-video.service';

@Component({
  selector: 'app-share-video',
  templateUrl: './share-video.component.html',
  styleUrls: ['./share-video.component.css']
})
export class ShareVideoComponent {
  
  youtubeVideoUrl: string = '';

  private readonly notifier: NotifierService;
  constructor(private router: Router, private service: ShareVideoService, private notification: NotifierService) {
    this.notifier = notification;
  }

  ngOnInit() {
    if(!Globals.isUserLogin) {
      this.router.navigate([`home`]);
      return;
    }
  }
  
  shareVideo(event: any) {
    event.preventDefault();
  }

  logoutAction(event: any) {
    event.preventDefault();

    Globals.loginResponse.clear();
    Globals.isUserLogin = !Globals.isUserLogin;

    this.router.navigate([`home`]);
  }

  getLoginEmail() {
    return Globals.loginResponse.getEmail;
  }

  onLinkChange(event: any) {
    this.youtubeVideoUrl = event.target.value;
  }

  share(event: any) {
    event.preventDefault();
    
    let body = {
      "userId": Globals.loginResponse.getId,
      "youtubeVideoUrl": this.youtubeVideoUrl
    }
    this.service.share(body).subscribe(data => {
      this.handleShareVideoResponse(data);
      this.youtubeVideoUrl = '';
    });
  }

  handleShareVideoResponse(data: any) {
    if(data.error) {
      this.notifier.notify('failure', data.message);
      return;
    }
    this.router.navigate([`home`]);
  }
}
