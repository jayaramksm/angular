import { NgModule } from '@angular/core';
// import { MatButtonModule } from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';




const MaterialsComponent = [
  // MatButtonModule,
  MatButtonToggleModule,MatIconModule,MatBadgeModule,MatProgressSpinnerModule,MatButtonModule
  ,MatToolbarModule,
  MatSidenavModule,MatMenuModule,MatListModule,
  MatGridListModule
  ,MatExpansionModule,MatCardModule,MatTabsModule,MatStepperModule,MatInputModule,
  MatFormFieldModule,MatDatepickerModule,MatDialogModule,MatDatepickerModule,MatNativeDateModule
,MatTableModule
]



@NgModule({
 exports:[MaterialsComponent ],
  imports: [MaterialsComponent  ]
})
export class MaterialsModule { }
