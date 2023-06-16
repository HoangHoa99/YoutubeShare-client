import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent {

  @Input() list: Array<Map<string, string>> = [];

  constructor(private sanitizer: DomSanitizer) {}

  isMobile: boolean = false;

  ngOnInit() {
    let userAgent = navigator.userAgent;
    if (/Android|iPhone/i.test(userAgent)) {
      this.isMobile = true;
    }
  }

  getValue(item: any, key: string) {
    return item[key];
  }

  getVideoUrl(item: any) {
    let videoId = this.getValue(item, 'videoId');
    let url = `https://www.youtube.com/embed/${videoId}`;
    console.log(url);
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  getIframeHeight() {
    if(this.isMobile) {
      return 200;
    }
    return 316;
  }

  getIframeWidth() {
    if(this.isMobile) {
      return 330;
    }
    return 560;
  }
}
