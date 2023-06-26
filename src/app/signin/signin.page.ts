import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { PostService } from '../apiservices/post.service';
import { GetService } from '../apiservices/get.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
 //declare variable here
  authdata:any;
  Userform:any;

  constructor(
     public router: Router, 
     public formbuider: FormBuilder,
     private http: HttpClient,
     private toastCtrl: ToastController,
     private postapi :PostService,
     private getapi :GetService) {}
     
     userdata={
      email:"",
      password:"",
     }

  ngOnInit() {
    this.Userform = this.formbuider.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }

  goTosignup() {
    this.router.navigate([`signup`]);
  }

  goToforgotpass() {
    this.router.navigate([`forgot-pass`]);
  }
  signin(){
    var frm = this.Userform
    if(!frm.valid){
      this.toastCtrl.create({ duration: 4000, message: "Please provide all the required values!", position: 'top', }).then(t => t.present())
      return;
    }
    const auth = {Username: frm.value.email,Password: frm.value.password}
    this.getapi.loginapi(auth).subscribe(data => {
      this.authdata = data;
     if(this.authdata.status=="SUCCESS"){
      localStorage.setItem('token', JSON.stringify(this.authdata.token));
      localStorage.setItem('profile', JSON.stringify(this.authdata));
      this.toastCtrl.create({ duration: 3000, message: "Login Successfull!", position: 'top', }).then(t => t.present())
      this.router.navigate([`dashboard`]);
    }
     if(this.authdata.status=="ERROR"){
      this.toastCtrl.create({ duration: 3000, message: this.authdata.message, position: 'top', }).then(t => t.present())
     }
    });
  }
}
