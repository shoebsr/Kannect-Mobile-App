import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetService {
  token:any;
  //serviceurl = environment.apiUrl;
  serviceurl = "https://kanexon.com/api/api.php?method=";
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
  constructor(private http: HttpClient) { }

  // public getData() {
  //   return this.http.get(environment.apiUrl+`/public/company`);
  // }
  public loginapi(reg: any) {
    return this.http.post(this.serviceurl+`login&username=`+reg.Username +`&password=`+reg.Password   , this.options);
  }
  public signupapi(signupdata: any) {
    return this.http.post(this.serviceurl+`register&firstname=`+signupdata.firstname+`&lastname=`+signupdata.lastname+`&email=`+signupdata.email+`&phone=`+signupdata.phone+`&password=`+signupdata.password, this.options);
  }

  public forgotpassapi(forgotpassdata: any) {
    return this.http.post(this.serviceurl+`forgotpwd&email=`+forgotpassdata.email, this.options);
  }
}
