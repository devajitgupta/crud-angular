import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../../services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EActionType } from '../../shared/enums/action-types.enum';
import { Student } from '../../students';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.component.html',
  styleUrls: ['./add-student.component.component.css']
})
export class AddStudentComponentComponent implements OnInit {
  @Input() action: EActionType = EActionType.View;
  @Input() data!: Student;
  @Output() onCloseForm: EventEmitter<boolean> = new EventEmitter<boolean>();

  public form: FormGroup;
  public title: string;
  public readOnly: boolean;
  public eActionType: typeof EActionType = EActionType;
  public hasDataChanged: boolean = false;
  public isSubmitted: boolean = false;

  constructor(
    private StudentServices: ServicesService,
    private formBuild: FormBuilder
  ) {
    this.title = '';
    this.form = this.formBuild.group({
      name: ['', [Validators.required]],
      fatherName: ['', [Validators.required]],
      motherName: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      country: ['', [Validators.required]],
      email: ['', [Validators.required]],
    });
    this.readOnly = true;
  }

  ngOnInit(): void {
    this.form.reset();
    this.hasDataChanged = false;
    if (this.action == EActionType.Add) {
      this.title = 'Add Student';
      this.readOnly = false;
    }
    else if (this.action == EActionType.Edit) {
      this.title = 'Edit Student';
      this.readOnly = false;
      this.fillFormData();
    }
    else {
      this.title = 'View Student';
      this.readOnly = true;
      this.fillFormData();
    }
  }

  enableForm() {
    this.title = 'Edit Student';
    this.readOnly = false;
  }

  fillFormData() {
    this.form.patchValue({
      id: this.data?._id,
      name: this.data?.name,
      fatherName: this.data?.fatherName,
      motherName: this.data?.motherName,
      dob: this.data?.dob,
      country: this.data?.country,
      email: this.data?.email,
    });
  }

  get isValid() {
    return this.form.valid;
  }

  get formControls() {
    return this.form.controls;
  }

  onSubmit(): any {
    this.isSubmitted = true;
    if (!this.isValid) return false;


    if (this.action == EActionType.Add) {
      this.StudentServices.addstudent(this.form.value).subscribe((res: any) => {
        this.hasDataChanged = true;
        this.onExit();
      });
    }
    else if (this.action == EActionType.Edit) {
      this.StudentServices.updateStudent(this.form.value).subscribe((res: any) => {
        this.hasDataChanged = true;
        this.onExit();
      });
    }
    console.log(this.form.value);

  }
  onExit() {
    this.onCloseForm.emit(this.hasDataChanged);
  }
}