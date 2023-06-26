import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { PostService } from '../apiservices/post.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.page.html',
  styleUrls: ['./event-details.page.scss'],
})
export class EventDetailsPage implements OnInit {
  eventdetails: any;
  details: any;
  constructor(
    public router: Router,
    private toastCtrl: ToastController,
    private postapi: PostService
  ) {}

  ngOnInit() {
    this.geteventlist();
  }

  geteventlist() {
    //var orgid = JSON.parse(localStorage.getItem('org_id') || '{}');
    var token = JSON.parse(localStorage.getItem('token') || '{}');
    var event_id = JSON.parse(localStorage.getItem('eventid') || '{}');
    const eventdata = { token: token, org_id: "" };
    this.postapi.geteventlistapi(eventdata).subscribe((result) => {
      this.eventdetails = result;
      this.details = this.eventdetails.list;
      this.details = this.details.filter(
        (item: { event_id: any }) => item.event_id == event_id
      );
      //this.listdata = this.data.list
      console.log(this.details, 'eventlistdata');
    });
  }
}
