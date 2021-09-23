import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListStudentsRoutingModule } from './list-students-routing.module';
import { StudentListComponent } from './student-list/student-list.component';


@NgModule({
  declarations: [
    StudentListComponent
  ],
  imports: [
    CommonModule,
    ListStudentsRoutingModule
  ]
})
export class ListStudentsModule { }
