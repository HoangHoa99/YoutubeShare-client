import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotifierModule } from 'angular-notifier';
import { HomePageService } from './home-page/home-page.service';
import { HttpClientModule } from '@angular/common/http';
import { VideoListComponent } from './video-list/video-list.component';
import { ShareVideoComponent } from './share-video/share-video.component';
import { ShareVideoService } from './share-video/share-video.service';
import { WebSocketShareService } from './web-socket/web-socket-share.service';
import { WebSocketAPI } from './web-socket/web-socket-api';
import { YouTubePlayerModule } from '@angular/youtube-player';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    VideoListComponent,
    ShareVideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NotifierModule.withConfig({
      position: {
        horizontal: {
          position: 'right',
          distance: 12
        },
        vertical: {
          position: 'top',
          distance: 85,
          gap: 10
        }
      },
      theme: 'material',
      behaviour: {
        autoHide: 5000,
        onClick: 'hide',
        onMouseover: 'pauseAutoHide',
      }
    }),
    YouTubePlayerModule
  ],
  providers: [HomePageService, ShareVideoService, WebSocketShareService, WebSocketAPI],
  bootstrap: [AppComponent]
})
export class AppModule { }
