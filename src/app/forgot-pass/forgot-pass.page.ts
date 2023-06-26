import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { PostService } from '../apiservices/post.service';
import { GetService } from '../apiservices/get.service';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.page.html',
  styleUrls: ['./forgot-pass.page.scss'],
})
export class ForgotPassPage implements OnInit {
  Userform:any;
  authdata:any
  constructor( public router: Router, 
    public formbuider: FormBuilder,
    private http: HttpClient,
    private toastCtrl: ToastController,
    private getapi :GetService) { }
    userdata={
      email:"",
    
     }

  ngOnInit() {
    this.Userform = this.formbuider.group({
      email: ['', [Validators.required]],
      
    })
  }
  submit(){
    var frm = this.Userform
    if(!frm.valid){
      this.toastCtrl.create({ duration: 4000, message: "Please provide all the required values!", position: 'top', }).then(t => t.present())
      return;
    }
    const auth = {email: frm.value.email}
    this.getapi.forgotpassapi(auth).subscribe(data => {
      this.authdata = data;
     if(this.authdata.status=="SUCCESS"){
      this.toastCtrl.create({ duration: 3000, message: "check otp on your email !", position: 'top', }).then(t => t.present())
      this.router.navigate([`forgot-pass-otp`]);
    }
     if(this.authdata.status=="ERROR"){
      this.toastCtrl.create({ duration: 3000, message: this.authdata.message, position: 'top', }).then(t => t.present())
     }
    });
  }
}
