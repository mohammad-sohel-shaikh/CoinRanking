import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbAlertModule,
  NbBadgeModule,
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbListModule,
  NbMenuModule,
  NbSidebarModule,
  NbStepperModule,
  NbTagModule,
  NbRadioModule,
  NbFormFieldModule,
  NbThemeModule,
  NbButtonModule,
  NbUserModule,
  NbDialogModule,
  NbSearchModule,
  NbSelectModule,
  NbAutocompleteModule,
  NbTooltipModule,
  NbLayoutModule,
  NbToastrModule,
} from '@nebular/theme';

const THEME_MODULE = [
  NbCardModule,
  NbStepperModule,
  NbInputModule,
  NbSidebarModule,
  NbMenuModule,
  NbTagModule,
  NbIconModule,
  NbListModule,
  NbAlertModule,
  NbBadgeModule,
  NbRadioModule,
  NbFormFieldModule,
  NbThemeModule,
  NbButtonModule,
  NbUserModule,
  NbDialogModule,
  NbSearchModule,
  NbSelectModule,
  NbAutocompleteModule,
  NbTooltipModule,
  NbLayoutModule,
  NbToastrModule
];

@NgModule({
  declarations: [],
  imports: [CommonModule, THEME_MODULE],
  exports: [THEME_MODULE],
})
export class ThemeModule {}
