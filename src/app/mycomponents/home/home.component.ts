import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';
import { CurdService } from 'src/app/service/curd.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  userData: any[] | undefined;

  constructor(private curd:CurdService, private router: Router) { 
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
  }

  ngOnInit(): void {
    this.curd.getData().subscribe(data=>{
      this.userData = data as any[]
      // console.log(data);   // All data from database
      // this.userData = data
    });
  }

  deleteUser(id:any){
    var proceed = confirm("Are you sure you want to delete?");
    if (proceed) {
        this.curd.delUser(id).subscribe((result)=>{
        // console.log(result)
      })
      setTimeout(() => {  this.router.navigate([this.router.url]); }, 500);  
    } else {
      //don't proceed
    }
    
  }
}
