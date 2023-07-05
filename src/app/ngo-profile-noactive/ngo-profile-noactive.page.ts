import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngo-profile-noactive',
  templateUrl: './ngo-profile-noactive.page.html',
  styleUrls: ['./ngo-profile-noactive.page.scss'],
})
export class NgoProfileNoactivePage implements OnInit {
  switchTab = 'activity';
  constructor() {}
  segmentChanged(ev: any) {
    this.switchTab = ev.detail.value;
  }

  ngOnInit() {}
}
