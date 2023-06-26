import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  profiledata:any;
 
  constructor() { }

  ngOnInit() {
    this.getprofiledata()
  }

  getprofiledata(){
    var arr = [];
    var data = JSON.parse(localStorage.getItem('profile') || '{}');
   
    arr.push(data.data)
    this.profiledata = arr;
    console.log(this.profiledata,"this.profiledata");
    
  }

}
