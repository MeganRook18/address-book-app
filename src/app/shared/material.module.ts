import { NgModule } from "@angular/core";
import {
  MatCardModule,
  MatFormFieldModule,
  MatOptionModule,
  MatSelectModule,
  MatInputModule,
  MatButtonModule, MatTableModule, MatIconModule
} from "@angular/material";

@NgModule({
  exports: [
    MatCardModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
  ]
})
export class MaterialModule {}
