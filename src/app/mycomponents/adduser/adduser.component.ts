import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { CurdService } from 'src/app/service/curd.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  data={
    fname:"",
    mname:"",
    lname:"",
    email:"",
    pswd:""
  }
  constructor(private curd:CurdService) { }

  ngOnInit(): void {
  }

  somefunc(data:any){
    console.log(data);
    if(this.data.fname=='' || this.data.fname==null || this.data.lname=='' || this.data.lname==null || 
    this.data.email=='' || this.data.email==null || this.data.pswd=='' || this.data.pswd==null ){
      alert("Fields can not be empty")
    }else{
      alert("Data Added");
    this.curd.sendData(data).subscribe((result)=>{
      // console.log(result)
      
    })
    }
    
  
  }
}
