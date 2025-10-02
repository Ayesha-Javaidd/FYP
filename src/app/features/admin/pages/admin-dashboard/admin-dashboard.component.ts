import { Component } from '@angular/core';
import { SidebarComponent } from '../../../../shared/components/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { StatCardComponent } from '../../../../shared/components/stat-card/stat-card.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { TeacherTableComponent } from '../../components/teacher-table/teacher-table.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    StatCardComponent,
    TeacherTableComponent,
    ButtonComponent,
  ],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css',
})
export class AdminDashboardComponent {
  onPrevPage() {
    throw new Error('Method not implemented.');
  }
  onPageSelect(page: number) {
    throw new Error('Method not implemented.');
  }
  onNextPage() {
    throw new Error('Method not implemented.');
  }
  isSidebarOpen = true;
  columns = [
    { key: 'avatar', label: 'Teacher' },
    { key: 'courses', label: 'Courses' },
    { key: 'students', label: 'Students' },
    { key: 'role', label: 'Role' },
    { key: 'status', label: 'Status' },
  ];

  statsCards: StatCard[] = [
    {
      title: 'Total Users',
      value: '12,456',
      icon: 'fas fa-users',
      iconBgClass: 'bg-blue-100',
      iconColorClass: 'text-blue-600',
    },
    {
      title: 'Active Courses',
      value: '89',
      icon: 'fas fa-graduation-cap',
      iconBgClass: 'bg-green-100',
      iconColorClass: 'text-green-600',
    },
    {
      title: 'Registered Courses',
      value: '1,230',
      icon: 'fas fa-book-open',
      iconBgClass: 'bg-purple-100',
      iconColorClass: 'text-purple-600',
    },
    {
      title: 'Total Teachers',
      value: '57',
      icon: 'fas fa-chalkboard-teacher',
      iconBgClass: 'bg-orange-100',
      iconColorClass: 'text-orange-600',
    },
  ];

  teachers = [
    {
      avatar: 'JD',
      name: 'John Doe',
      email: 'john.doe@example.com',
      courses: 12,
      students: 345,
      role: 'Teacher',
      status: 'Active',
    },
    {
      avatar: 'JS',
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      courses: 8,
      students: 210,
      role: 'Sub-Admin',
      status: 'Active',
    },
    {
      avatar: 'RB',
      name: 'Robert Brown',
      email: 'robert.brown@example.com',
      courses: 15,
      students: 450,
      role: 'Teacher',
      status: 'Inactive',
    },
  ];
}

interface StatCard {
  title: string;
  value: string;
  icon: string;
  iconBgClass: string;
  iconColorClass: string;
}
