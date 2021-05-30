import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { AcceptInputToUpdateComponent } from './accept-input-to-update/accept-input-to-update.component';
import { UpdateFormTrackerComponent } from './update-form-tracker/update-form-tracker.component';



@NgModule({
  declarations: [
    AcceptInputToUpdateComponent,
    UpdateFormTrackerComponent
  ],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule, BrowserAnimationsModule,AppRoutingModule
  ],
  exports:[AcceptInputToUpdateComponent]
})
export class TrackerModule { }
