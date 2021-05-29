import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayAllTaskComponent } from './display-all-task/display-all-task.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';


import { AcceptTaskDetailsComponent } from './accept-task-details/accept-task-details.component';
import { UpdateTaskDetailsComponent } from './update-task-details/update-task-details.component';
import { DeleteTaskDetailsComponent } from './delete-task-details/delete-task-details.component';



@NgModule({
  declarations: [
    DisplayAllTaskComponent,
    AcceptTaskDetailsComponent,
    UpdateTaskDetailsComponent,
    DeleteTaskDetailsComponent
  ],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule, BrowserAnimationsModule,AppRoutingModule
  ],
  exports:[DisplayAllTaskComponent]
})
export class TaskModule { }
