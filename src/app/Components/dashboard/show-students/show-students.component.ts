import { Component, OnInit } from '@angular/core';
import { StudentdetailsService } from 'src/app/Services/studentData/studentdetails.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-students',
  templateUrl: './show-students.component.html',
  styleUrls: ['./show-students.component.scss']
})
export class ShowStudentsComponent implements OnInit {

  constructor(private _student: StudentdetailsService, private router: Router) { }
  showStudentData: any;

  deleteStudentData(student){
    this._student.deleteStudent(student).subscribe(
      (data) => {
        console.log(data);
        document.location.reload();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  editStudentData(){
    this.router.navigate(['/dashboard/editstudent']);
  }



  ngOnInit() {
    this._student.getStudents().subscribe(
      (data) => {
        this.showStudentData = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
