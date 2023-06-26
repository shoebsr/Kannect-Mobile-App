import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-membership-details',
  templateUrl: './membership-details.page.html',
  styleUrls: ['./membership-details.page.scss'],
})
export class MembershipDetailsPage implements OnInit {
  membershipdetails:any
  constructor() { }
  details :any
  ngOnInit() {
    console.log("ss");
    var arry =[]
    this.membershipdetails =JSON.parse(localStorage.getItem('membershipdetails') || '{}')
    arry.push(this.membershipdetails);
    this.details=arry
    
  }

}
