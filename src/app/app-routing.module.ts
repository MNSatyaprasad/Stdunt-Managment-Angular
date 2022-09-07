import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { StudentsComponent } from './components/students/students.component';

const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'students', component: StudentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
