import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StudentdetailsService {

  constructor(private http: HttpClient, private router: Router ) { }

 admin_url:any = "http://localhost:3000/Admin";
student_url:string = "http://localhost:3000/students";

  getData(){
    return this.http.get(this.admin_url);
  }

  submit_studentData(formvalue) {
   let { email,password,gender,phone } = formvalue; 
   let data = {id:Date.now(),email,password,gender,phone};
   return this.http.post(this.student_url, data);
  }
  getStudents(){
     return this.http.get(this.student_url);
  }
  authenticate(): boolean{
    let user = sessionStorage.getItem("user");
    if(user){
      return true;
    }else{
      return false;
    }
  }
  logout(){
    sessionStorage.removeItem("user");
    this.router.navigate(['/']);
  }

  deleteStudent(student){
    console.log(student,this.student_url, student.id);
    return this.http.delete(this.student_url + '/' + student.id);
  }
}
