import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { PracticeComponent } from './practice/practice.component';

const routes: Routes = [
  { path: 'child', component: ChildComponent},
  { path: 'practice', component: PracticeComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
