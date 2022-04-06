import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Angular
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

//Components

//Material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDividerModule} from '@angular/material/divider'
import {MatTableModule} from '@angular/material/table';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { SpinnerComponent } from '../components/spinner/spinner.component';
import { SpinnerService } from '../components/spinner/spinner.service';
import { DataGridViewComponent } from '../components/data-grid-view/data-grid-view.component';


@NgModule({
  declarations: [SpinnerComponent, DataGridViewComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatExpansionModule,
    MatSnackBarModule
  ],
  providers:[SpinnerService],
  exports:[
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatCardModule,
    MatSnackBarModule,
    SpinnerComponent,
    DataGridViewComponent
  ]
})
export class SharedModule { }
