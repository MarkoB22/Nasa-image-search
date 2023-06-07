import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstResultDisplayComponent } from './first-result-display/first-result-display.component';

const routes: Routes = [
  { path: 'item/:query', component: FirstResultDisplayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
