import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { PostService } from '../apiservices/post.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  token: any;
  listdata: any;
  data: any;
  org_id: any;
  eventlistdata: any;
  constructor(
    public router: Router,
    private postapi: PostService
  ) {}

  ngOnInit() {
    this.getMembershiplist();
    this.geteventlist();
  }
  getMembershiplist() {
    this.token = JSON.parse(localStorage.getItem('token') || '{}');
    this.postapi.getMembershipapi(this.token).subscribe((result) => {
      this.data = result;
      var aa = Object.values(this.data.list)
      this.listdata = aa;
      
     // localStorage.setItem('org_id', JSON.stringify(item.org_id));
      //this.org_id= this.listdata.org_id
      console.log(result," memberlist");
    });
  }

  geteventlist() {
    const eventdata = { token: this.token, org_id: '' };
    this.postapi.geteventlistapi(eventdata).subscribe((result) => {
      this.eventlistdata = result;
      //this.listdata = this.data.list
      console.log(this.eventlistdata, ' eventlistdata');
    });
  }

  goTomemberdetails(item: any) {
    console.log(item,"membershipdetails");
    localStorage.setItem('membershipdetails', JSON.stringify(item));
    this.router.navigate([`membership-details`]);
  }
  gotoeventdetails(id: any) {
    console.log(id);
    localStorage.setItem('eventid', JSON.stringify(id));
    this.router.navigate([`event-details`]);
  }
}
