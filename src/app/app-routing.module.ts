import { DataFetchComponent } from './@theme/data-fetch/data-fetch.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './@theme/body/body.component';
import { ContentComponent } from './@theme/content/content.component';

const routes: Routes = [
  {path:'body',component:BodyComponent},
  {path:'body/:uuid',component:ContentComponent},
  {path:'datafetch',component:DataFetchComponent},
  // {path:'',component:HeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
