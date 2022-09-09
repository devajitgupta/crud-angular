import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponentComponent } from './components/add-student.component/add-student.component.component';
import { ShowStudentComponentComponent } from './components/show-student.component/show-student.component.component';
import { SingleStudentComponentComponent } from './components/single-student.component/single-student.component.component';

const routes: Routes = [
  {
    path: '', component: ShowStudentComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
