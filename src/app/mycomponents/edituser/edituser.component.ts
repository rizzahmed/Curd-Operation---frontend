// import { parseI18nMeta } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit , Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { stringify } from 'querystring';
import { CurdService } from 'src/app/service/curd.service';



@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  constructor(private curd:CurdService, private route: ActivatedRoute) {}

  u_mid_name = ""
  userData: any[] = []
  // userData: any[] =[];
  pperam: any;
  f_name: any;
  res: any;
  ngOnInit(): void {
    this.pperam = this.route.snapshot.params // url perameters

    this.curd.editUser(this.pperam['id']).subscribe((result)=>{
      this.userData = result  as any
      // this.res = objArray.map( => a.foo);
    }) 

    // this.f_name = this.userData[0].u_fname;

  }


  somefunc(uf: any,um: any,ul: any,ue: any,up: any){
    // console.log(uf,um,ul,ue,up);
    const data= {fname:uf, mname:um, lname:ul, email:ue, password:up, id: Number(this.pperam['id'])}
    if(data.fname=='' || data.fname==null || data.lname=='' || data.lname==null || data.email=='' ||data.email==null || data.password=='' || data.password==null ){
      alert("Fields can not be empty")
    }
    else{
      alert("Data Updated");
      this.curd.updateData(data).subscribe((result)=>{ 
        console.log(result);
      })
    }
  }
}