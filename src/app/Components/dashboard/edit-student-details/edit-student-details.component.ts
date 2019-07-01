import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-student-details',
  templateUrl: './edit-student-details.component.html',
  styleUrls: ['./edit-student-details.component.scss']
})
export class EditStudentDetailsComponent implements OnInit {

  constructor() { }
  updateForm: FormGroup;
  ngOnInit() {
    this.updateForm = new FormGroup({
      emailUpdate: new FormControl ('', Validators.required),
      phoneUpdate : new FormControl ('', Validators.required),
      passwordUpdate: new FormControl ('', Validators.required),
      cPasswordUpdate: new FormControl ('', Validators.required),
      genderUpdate: new FormControl ('', Validators.required)
    });
  }

  onSave(){
    console.log(this.updateForm.value);
  }

}
