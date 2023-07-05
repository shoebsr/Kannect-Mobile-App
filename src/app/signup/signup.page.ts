import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PostService } from '../apiservices/post.service';
import { GetService } from '../apiservices/get.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  regdata:any
  constructor(
      public router: Router, 
      public formbuider: FormBuilder,
      private http: HttpClient,
      private toastCtrl: ToastController, 
      private postapi :PostService,
      public ngZone: NgZone, private getapi :GetService) {}
      Userform: any;

      ngOnInit() {
      this.Userform = this.formbuider.group({
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      password: ['', [Validators.required]],
      firstName:['', [Validators.required]],
      lastname:['', [Validators.required]],
      checkage: [null, [Validators.required]],
      terms: [null, [Validators.required]]
    })
  }

  validationUserMessage ={
    EmailID:[
      {type:"required", message:"please Enter your Email Address!"},
      {type:"minlength", message:"The Password must be at least 5 characters or more"}

    ],Mobile:[
      {type:"required", message:"please Enter your Mobile number!"},
      {type:"minlength", message:"The Password must be at least 5 characters or more"}

    ],Password:[
      {type:"required", message:"please Enter your password!"},
      {type:"minlength", message:"The Password must be at least 5 characters or more"}

    ],
    FirstName:[
      {type:"required", message:"please Enter your First Name!"},
      
    ],
    checkage:[
      {type:"required", message:"please check age!"},
      
    ],
    terms:[
      {type:"required", message:"please check age!"},
      
    ]

  }
  userdata={
    firstName:"",
    lastname:"",
    phone:"",
    email:"",
    password:"",
    checkage:"",
    terms:""
   }
   
  
  goTosignin() {this.router.navigate([`signin`]);}

  signup(){
    var frm = this.Userform
    console.log(frm.value)
    if(frm.value.checkage == null || frm.value.checkage == false || frm.value.terms == null || frm.value.terms == false){
      this.toastCtrl.create({ duration: 4000, message: "Please check age and terams !", position: 'top', }).then(t => t.present())
      return
     }
    if(!frm.valid){
      this.toastCtrl.create({ duration: 4000, message: "Please provide all the required values!", position: 'top', }).then(t => t.present())
      return;
    }
    const auth = {
       firstname:frm.value.firstname,
       lastname:frm.value.lastname,
       email:frm.value.email,
       phone:frm.value.phone,
       password:frm.value.password
    }
    this.getapi.signupapi(auth).subscribe(data => {
      this.regdata = data;
     if(this.regdata.status=="SUCCESS"){
      this.toastCtrl.create({ duration: 3000, message: "register Successfull!", position: 'top', }).then(t => t.present())
      this.router.navigate([`signin`]);
    }
     if(this.regdata.status=="ERROR"){
      this.toastCtrl.create({ duration: 3000, message: this.regdata.message, position: 'top', }).then(t => t.present())
     }
     if(this.regdata.StatusCode ==401){
      this.toastCtrl.create({ duration: 3000, message: this.regdata.message, position: 'top', }).then(t => t.present())
     }
    });
  }
}
