import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
@Component({
  selector: 'app-teacher-table',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './teacher-table.component.html',
  styleUrl: './teacher-table.component.css',
})
export class TeacherTableComponent {
  teachers: Teacher[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      courses: 12,
      students: 345,
      role: 'Teacher',
      status: 'Active',
      avatar: 'JD',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      courses: 8,
      students: 210,
      role: 'Sub-Admin',
      status: 'Active',
      avatar: 'JS',
    },
    {
      id: 3,
      name: 'Robert Brown',
      email: 'robert.brown@example.com',
      courses: 15,
      students: 450,
      role: 'Teacher',
      status: 'Inactive',
      avatar: 'RB',
    },
  ];
}

interface Teacher {
  id: number;
  name: string;
  email: string;
  courses: number;
  students: number;
  role: string;
  status: 'Active' | 'Inactive';
  avatar: string;
}
