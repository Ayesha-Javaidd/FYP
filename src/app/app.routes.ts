import { Routes } from '@angular/router';
import { AdminDashboardComponent } from './features/admin/pages/admin-dashboard/admin-dashboard.component';
import { CoursesComponent } from './features/admin/pages/courses/courses.component';
import { UsersComponent } from './features/admin/pages/users/users.component';
import { SettingsComponent } from './features/admin/pages/settings/settings.component';
import { LoginComponent } from './features/auth/pages/login/login.component';
import { AdminSignupComponent } from './features/auth/pages/signups/admin-signup/admin-signup.component';
import { StudentSignupComponent } from './features/auth/pages/signups/student-signup/student-signup.component';
import { NotFoundComponent } from './features/not-found/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: AdminDashboardComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'users', component: UsersComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'adminsignup', component: AdminSignupComponent },
  { path: 'studentsignup', component: StudentSignupComponent },
  { path: '**', component: NotFoundComponent },
];
