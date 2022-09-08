import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../services.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-add-student.component',
  templateUrl: './add-student.component.component.html',
  styleUrls: ['./add-student.component.component.css']
})
export class AddStudentComponentComponent implements OnInit {
  form!:FormGroup;  
  constructor(private StudentServices:ServicesService, private router: Router ) { }

  ngOnInit(): void {
    this.form= new FormGroup({
      name: new FormControl('',[Validators.required]),
      fatherName: new FormControl('',[Validators.required]),
      motherName: new FormControl('',[Validators.required]),
      dob: new FormControl('',[Validators.required]),
      country: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required])
    }) 
  }


  onSubmit(){ 
    console.log(this.form.value); 
    this.StudentServices.addstudent(this.form.value).subscribe((res:any)=>{
      console.log("data inserted sussccesfiully");
      this.router.navigateByUrl('/');
    });
  }
}