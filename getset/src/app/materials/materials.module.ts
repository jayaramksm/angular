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


const Materialcomponent = [
  MatButtonModule,MatToolbarModule,MatIconModule,MatCardModule,MatTabsModule,MatMenuModule,MatListModule,MatDialogModule
  ,MatExpansionModule,
]

@NgModule({
  exports: [Materialcomponent],
  imports: [
    Materialcomponent
  ]
})
export class MaterialsModule { }
