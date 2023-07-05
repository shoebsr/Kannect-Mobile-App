import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  authenticated:any
  constructor( private router :Router,) {}
  staylogin(){
     var d="null"
    this.authenticated =JSON.parse(localStorage.getItem('token')|| d);
    if(this.authenticated !==null && this.authenticated !=='null'){
      //alert(JSON.stringify(this.authenticated))
      this.router.navigate(['/dashboard']);
    }
    else{
      this.router.navigate(['/signin']);
    }
}
ngOnInit() {
  //this.staylogin();
  
}
// ionViewWillEnter() {
//   this.staylogin();
// }
}
