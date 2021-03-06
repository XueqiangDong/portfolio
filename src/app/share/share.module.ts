import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatAutocompleteModule, MatButtonModule, MatButtonToggleModule,
  MatSidenavModule, MatSlideToggleModule, MatTabsModule,
  MatToolbarModule, MatCardModule, MatCheckboxModule, MatChipsModule,
  MatDatepickerModule, MatDialogModule, MatGridListModule, MatIconModule,
  MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule,
  MatProgressBarModule, MatRadioModule, MatSelectModule, MatTooltipModule, MatExpansionModule,
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from "@angular/flex-layout";
import 'hammerjs';
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {LocalStorageService} from "../services/local-storage.service";

const MATERIAL_MODULES = [
  MatToolbarModule, MatSidenavModule, MatAutocompleteModule, MatButtonModule,
  MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule,
  MatDatepickerModule, MatDialogModule, MatGridListModule, MatIconModule, MatTooltipModule,
  MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatSlideToggleModule,
  MatProgressBarModule, MatRadioModule, MatSelectModule, MatTabsModule, MatExpansionModule,
];
const COMMON_MODULES = [
  ...MATERIAL_MODULES, CommonModule, ReactiveFormsModule, FormsModule, FlexLayoutModule,
  RouterModule, HttpClientModule
];
const EXPORT_COMPONENTS = [];

@NgModule({
  imports: [
    ...COMMON_MODULES,
  ],
  exports: [
    ...COMMON_MODULES, ...EXPORT_COMPONENTS,
  ],
  declarations: []
})
export class ShareModule {
}
