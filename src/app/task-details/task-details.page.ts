import { Component, OnInit } from '@angular/core';
import { PostService } from '../apiservices/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.page.html',
  styleUrls: ['./task-details.page.scss'],
})
export class TaskDetailsPage implements OnInit {
  data: any;
  taskdata: any;
  notes: any;
  task_id: any;
  constructor(public router: Router, private postapi: PostService) {}

  ngOnInit() {
    this.gettaskdetailsbyid();
    this.getMembershiplist();
    this.task_id = JSON.parse(localStorage.getItem('task_id') || '{}');
  }
  token: any;
  orgid: any;
  memberdata: any;
  memberlistdata: any;
  d:any
  getMembershiplist() {
    var t = JSON.parse(localStorage.getItem('token') || '{}');
    var org_id = JSON.parse(localStorage.getItem('org_id') || '{}');
    this.postapi.getMembershipapi(t).subscribe((result) => {
      this.d = result;
      var aa = Object.values(this.d.list)
      this.memberdata = [aa];
      this.memberlistdata = this.memberdata[0];
      this.memberlistdata = this.memberlistdata.filter(
        (item: { org_id: any }) => item.org_id == org_id );
      console.log(this.memberlistdata, ' memberlist');
    });
  }
  gettaskdetailsbyid() {
    const obj = {
      token: JSON.parse(localStorage.getItem('token') || '{}'),
      task_id: JSON.parse(localStorage.getItem('task_id') || '{}'),
    };
    this.postapi.gettaskdetailsapi(obj).subscribe((result) => {
      this.data = result;
      this.taskdata = [this.data.data];
      this.notes = this.data.notes;
      console.log(result, ' gettaskdetailsbyid');
    });
  }
}
