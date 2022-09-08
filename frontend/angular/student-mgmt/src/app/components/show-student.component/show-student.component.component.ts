import { Component, OnInit, NgZone } from '@angular/core';
import { ServicesService } from '../../services.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { group } from '@angular/animations';
import { Router, ActivatedRoute } from '@angular/router';
import { Student } from '../../students';
import { Observable } from 'rxjs';
import { EActionType } from '../../shared/enums/action-types.enum';

@Component({
  selector: 'app-show-student.component',
  templateUrl: './show-student.component.component.html',
  styleUrls: ['./show-student.component.component.css']
})
export class ShowStudentComponentComponent implements OnInit {
  public Students: Observable<Student[]>;
  public isFormOpened: boolean = false;
  public action: EActionType = EActionType.View;
  public formData: any;

  constructor(
    private StudentServices: ServicesService,
  ) {
    this.Students = this.StudentServices.getStudent();
  }

  ngOnInit(): void {
    this.isFormOpened = false;
  }

  delStudent(id: any) {
    console.log("delete student");
    console.log(id);
    this.StudentServices.delStu(id).subscribe((res => {
    }));
  }

  addRecord() {
    this.formData = null;
    this.action = EActionType.Add;
    this.isFormOpened = true;
  }

  onEdit(data: any) {
    this.formData = data;
    this.action = EActionType.Edit;
    this.isFormOpened = true;
  }

  onView(data: any) {
    this.formData = data;
    this.action = EActionType.View;
    this.isFormOpened = true;
  }

  onCloseForm(event: boolean) {
    if (event) {
      this.Students = this.StudentServices.getStudent();
    }
    this.isFormOpened = false;
  }

}