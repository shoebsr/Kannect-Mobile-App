import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  switchTab = 'basic';
  constructor() {}
  segmentChanged(ev: any) {
    this.switchTab = ev.detail.value;
  }
  ngOnInit() {}
}
