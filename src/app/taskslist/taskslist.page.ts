import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../apiservices/post.service';

@Component({
  selector: 'app-taskslist',
  templateUrl: './taskslist.page.html',
  styleUrls: ['./taskslist.page.scss'],
})
export class TaskslistPage implements OnInit {
  data:any;
  tasklist:any
  Membershiplist:any
  constructor(
    public router: Router,
    private postapi :PostService
    ) {}

  ngOnInit() {
    this.gettasklist()
  }

  goTotaskdet(item:any) {
    localStorage.setItem('task_id', JSON.stringify(item.task_id));
    localStorage.setItem('org_id', JSON.stringify(item.org_id));
    this.router.navigate([`task-details`]);
  }
  d:any
  getMembershiplist(){
    var token =JSON.parse(localStorage.getItem('token') || '{}')
    this.postapi.getMembershipapi(token).subscribe(result=>{
        this.d = result;
      var aa = Object.values(this.d.list)
     this.Membershiplist =[aa]
     //Object.values(result)
  })
}
  gettasklist(){
        this.getMembershiplist()
         var token =JSON.parse(localStorage.getItem('token') || '{}')
          this.postapi.gettasklistapi(token).subscribe(result=>{
          this.data =result
          var arr = []
          for(var i=0;i< this.data.list.length; i++){
            // if ( this.data.list[i].task_priority == '1') {
            //   this.data.list[i].task_priority = "lowPriority"
            // }
            // if ( this.data.list[i].task_priority == '2') {
            //   this.data.list[i].task_priority= "mediumPriority"
            // }
            // if ( this.data.list[i].task_priority == '3') {
            //   this.data.list[i].task_priority= "highPriority"
            // }
            for(var j=0;j< this.Membershiplist?.length; j++){
            if ( this.Membershiplist[0][j].org_id == this.data.list[i].org_id){
              let arr1 =this.data.list[i];
              let arr2 =this.Membershiplist[0][j];
              Object.assign(arr1, arr2);
              arr.push(arr1)
            }
            }
          }
          this.tasklist = arr
         //console.log(result," gettasklist");
         //console.log(this.Membershiplist," Membershiplist");
      })
  }

  
}
