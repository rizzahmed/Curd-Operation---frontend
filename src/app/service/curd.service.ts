import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurdService {

  private baseUrl:string="http://localhost:3000"

  constructor(private http:HttpClient) { }

  sendData(data:any){
    return this.http.post(`${this.baseUrl}/add-user`,data, {responseType: 'json'})
  }

  getData(){
    return this.http.get(`${this.baseUrl}/display-users`);
  }

  delUser(id:any){
    return this.http.delete(`${this.baseUrl}/delete-user/`+id);
  }

  editUser(id:any){
    return this.http.get(`${this.baseUrl}/edituser/`+id)
  }

  updateData(data:any){
    return this.http.post(`${this.baseUrl}/update-user`,data, {responseType: 'json'})
  }
}
