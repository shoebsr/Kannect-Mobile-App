import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  token:any;
   serviceurl = "https://kanexon.com/api/api.php?method=";
  private options = {
    headers: new HttpHeaders().set('Content-Type', 'application/json')
      // .set('Authorization', 'Bearer ' + sessionStorage.getItem('token'))
  };
   
  constructor(private http: HttpClient) { }

  
  public getMembershipapi (token: any) {
    return this.http.post(this.serviceurl+`membershiplist&token=`+token , this.options);
  }
  public geteventlistapi (eventdata: any) {
    return this.http.post(`https://kanexon.com/api/api.php?token=`+eventdata.token+`&method=eventlist&org_id=`+eventdata.org_id , this.options);
  }

   public gettasklistapi  (token: any) {
    return this.http.post(this.serviceurl+`tasklist&token=`+token , this.options);
  }

  public gettaskdetailsapi  (details: any) {
    return this.http.post(this.serviceurl+`taskdetails&token=`+details.token+`&id=`+details.task_id, this.options);
  }

  // public verifyemailapi  (details: any) {
  //   return this.http.post(environment.apiUrl+`erifyemail&email=`+details.token+`&id=`+details.task_id, this.options);
  // }
}
