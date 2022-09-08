import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentComponentComponent } from './add-student.component/add-student.component.component';
import { ShowStudentComponentComponent } from './show-student.component/show-student.component.component';
import { SingleStudentComponentComponent } from './single-student.component/single-student.component.component';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponentComponent,
    ShowStudentComponentComponent,
    SingleStudentComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
