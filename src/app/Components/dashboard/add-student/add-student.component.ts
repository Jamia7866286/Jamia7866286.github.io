import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentdetailsService } from 'src/app/Services/studentData/studentdetails.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {

  constructor(private _student: StudentdetailsService) { }
  studentForm: FormGroup;
  ngOnInit() {
    this.studentForm = new FormGroup({
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmpassword: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required)
    })

    this._student.getStudents();
  }

  onSubmit() {
    this._student.submit_studentData(this.studentForm.value).subscribe(
      (res)=>{
      console.log(res);
    },
    (err) => {
      console.log(err);
    }
  );
    console.log(this.studentForm.value);
    this.studentForm.reset();
  }
}
