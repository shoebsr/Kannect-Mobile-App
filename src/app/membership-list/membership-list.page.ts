import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../apiservices/post.service';

@Component({
  selector: 'app-membership-list',
  templateUrl: './membership-list.page.html',
  styleUrls: ['./membership-list.page.scss'],
})
export class MembershipListPage implements OnInit {
  token:any
  listdata:any
  data:any
 
  constructor(public router: Router,
    private postapi :PostService) {}

  ngOnInit() {this.getMembershiplist()}

  goTomemberdetails(item: any) {
    console.log(item);
    localStorage.setItem('membershipdetails', JSON.stringify(item));
    this.router.navigate([`membership-details`]);
  }

  getMembershiplist(){
    this.token =JSON.parse(localStorage.getItem('token') || '{}')
    this.postapi.getMembershipapi(this.token).subscribe(result=>{
     this.data =result;
     var aa = Object.values(this.data.list)

     this.listdata = aa
    //this.org_id= this.listdata.org_id
    //console.log(result," memberlist");
  })
}
}
