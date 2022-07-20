import { HeaderComponent } from './header/header.component';
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
  NbTabsetModule,
  NbMenuItem,
  NbButtonGroupModule
  // NbIconConfig,

} from '@nebular/theme';
import { ContentComponent } from './content/content.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DatachartComponent } from './content/datachart/datachart.component';



const THEME_MODULE = [
  NbCardModule,
  NbStepperModule,
  NbInputModule,
  NbSidebarModule,
  NgApexchartsModule,
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
  NbToastrModule,
  NbTabsetModule,
  NbButtonGroupModule,
  // NbIconConfig
];

@NgModule({
  declarations: [
    ContentComponent,
    DatachartComponent,
  ],
  imports: [CommonModule, THEME_MODULE],
  exports: [THEME_MODULE],
})
export class ThemeModule {}
