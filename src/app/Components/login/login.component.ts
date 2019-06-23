import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl }  from '@angular/forms';
import { StudentdetailsService } from 'src/app/Services/studentData/studentdetails.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
email:string;
pass:number;
  constructor(private _student: StudentdetailsService, private router: Router) {}


  login = new FormGroup({
    email: new FormControl(''),
    psw: new FormControl(''),
  });

  onSubmit(){
     console.log(this.login.value.email);
     if(this.login.value.email == this.email && this.login.value.psw == this.pass){
       sessionStorage.setItem("user",JSON.stringify({
         username: this.email,
         password: this.pass
       }))
       this.router.navigate(['dashboard']);
       console.log("working")
     }
     else{
       console.log("its not working");
     }
  }
  ngOnInit() {
    this._student.getData()
    .subscribe(
      (data:any) => {
        console.log(data[0]);
        this.email = data[0].Email;
        this.pass = data[0].password;

        console.log(this.email, this.pass);
      },
      (err) => {
        console.log(err);
      }
    )
  }
}
