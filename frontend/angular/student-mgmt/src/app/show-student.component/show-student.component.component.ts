import { Component, OnInit, NgZone } from '@angular/core';
import { ServicesService } from '../services.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { group } from '@angular/animations';
import { Router, ActivatedRoute } from '@angular/router';
import { Student } from '../students';

@Component({
  selector: 'app-show-student.component',
  templateUrl: './show-student.component.component.html',
  styleUrls: ['./show-student.component.component.css']
})
export class ShowStudentComponentComponent implements OnInit {
  getId: any;
  updateForm!: FormGroup;
  Students!: Student[];
 
  constructor(private ngZone: NgZone,
    private router: Router,
    private StudentServices: ServicesService, private formBuilder: FormBuilder, private route: ActivatedRoute) {
    this.updateForm = this.formBuilder.group({
      name: [''],
      fatherName: [''],
      motherName: [''],
      dob: [''],
      country: [''],
      email: ['']
    })
  }

  ngOnInit(): void {
   this.getAll();
  }

  getAll() {
    this.StudentServices.getStudent().subscribe(
      students => {
        this.Students = students;
      });
  }

  delStudent(id: any) {
    console.log("delete student")
    console.log(id);
    return this.StudentServices.delStu(id).subscribe((res => {
      alert('deleted')
      this.getAll();
    }));
  }

  
  onEdit(student: any) {
    this.getId=this.route.snapshot.paramMap.get('id');
    
    this.updateForm.controls['name'].setValue(student.name);
    this.updateForm.controls['fatherName'].setValue(student.fatherName);
    this.updateForm.controls['motherName'].setValue(student.motherName);
    this.updateForm.controls['dob'].setValue(student.dob);
    this.updateForm.controls['country'].setValue(student.country);
    this.updateForm.controls['email'].setValue(student.email);
    

    /*
    this.getId = this.route.snapshot.paramMap.get('id');
    this.StudentServices.getOnlyStudent(this.getId).subscribe((result) => {
      this.updateForm = new FormGroup({
        name: new FormControl(result['name']),
        fatherName: new FormControl (result['fatherName']),
        motherName: new FormControl (result['motherName']),
        dob:new FormControl (result['dob']),
        country:new FormControl (result['country']),
        email: new FormControl (result['email'])
      });
    }); 
    */
      
  }
  onUpdate(){
    this.StudentServices.updateStudent(this.updateForm.value,this.getId).subscribe((result) => {
      this.updateForm = new FormGroup({
        name: new FormControl(result['name']),
        fatherName: new FormControl (result['fatherName']),
        motherName: new FormControl (result['motherName']),
        dob:new FormControl (result['dob']),
        country:new FormControl (result['country']),
        email: new FormControl (result['email'])
      });
    });
    
    

    this.StudentServices.updateStudent(this.updateForm.value,this.getId ).subscribe((res:any)=>{
      console.log(res, "added");
    })
     }

}