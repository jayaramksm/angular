import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';



const Materialcomponent = [
  MatButtonModule,MatToolbarModule,MatIconModule,MatCardModule,MatTabsModule,MatMenuModule,MatListModule,MatDialogModule
  ,MatExpansionModule,MatFormFieldModule,MatTableModule,MatInputModule,MatSelectModule
]

@NgModule({
  exports: [Materialcomponent],
  imports: [
    Materialcomponent
  ]
})
export class MaterialsModule { }
