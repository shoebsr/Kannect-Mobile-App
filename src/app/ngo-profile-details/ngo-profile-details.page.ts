import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngo-profile-details',
  templateUrl: './ngo-profile-details.page.html',
  styleUrls: ['./ngo-profile-details.page.scss'],
})
export class NgoProfileDetailsPage implements OnInit {
  switchTab = 'activity';
  constructor() {}
  segmentChanged(ev: any) {
    this.switchTab = ev.detail.value;
  }

  ngOnInit() {}
}
