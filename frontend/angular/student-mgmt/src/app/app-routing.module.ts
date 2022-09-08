import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponentComponent } from './add-student.component/add-student.component.component';
import { ShowStudentComponentComponent } from './show-student.component/show-student.component.component';
import { SingleStudentComponentComponent } from './single-student.component/single-student.component.component';

const routes: Routes = [
  {
    path:'', component:ShowStudentComponentComponent
},
{
  path:"add-student", component:AddStudentComponentComponent
},
{
  path:"single-student:id", component:SingleStudentComponentComponent

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
