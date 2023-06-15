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

  getValue(item: any, key: string) {
    return item[key];
  }

  getVideoUrl(item: any) {
    let videoId = this.getValue(item, 'videoId');
    let url = `https://www.youtube.com/embed/${videoId}`;
    console.log(url);
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
