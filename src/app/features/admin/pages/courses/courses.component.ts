import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import {
  DataTableComponent,
  TableColumn,
} from '../../../../shared/components/data-table/data-table.component';
@Component({
  selector: 'app-courses',
  imports: [HeaderComponent, ButtonComponent, DataTableComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
})
export class CoursesComponent {
  onAddUser() {}
  onFilterByRole() {}
  onFilterByStatus() {}
  onPrevPage() {
    throw new Error('Method not implemented.');
  }
  onPageSelect(page: number) {
    throw new Error('Method not implemented.');
  }
  onNextPage() {
    throw new Error('Method not implemented.');
  }
  courseColumns: TableColumn[] = [
    { key: 'title', label: 'Course Title', type: 'text' },
    { key: 'code', label: 'Code', type: 'text' },
    { key: 'instructor', label: 'Instructor', type: 'text' },
    {
      key: 'status',
      label: 'Status',
      type: 'badge',
      badgeColors: {
        Active: 'bg-green-100 text-green-800',
        Inactive: 'bg-red-100 text-red-800',
        Upcoming: 'bg-blue-100 text-blue-800',
        Completed: 'bg-gray-100 text-gray-800',
      },
    },
  ];

  courses = [
    {
      id: 1,
      title: 'Introduction to Programming',
      code: 'CS101',
      instructor: 'John Doe',
      status: 'Active',
    },
    {
      id: 2,
      title: 'Data Structures',
      code: 'CS201',
      instructor: 'Jane Smith',
      status: 'Upcoming',
    },
    {
      id: 3,
      title: 'Database Systems',
      code: 'CS301',
      instructor: 'Robert Brown',
      status: 'Inactive',
    },
    {
      id: 4,
      title: 'Operating Systems',
      code: 'CS401',
      instructor: 'Ali Khan',
      status: 'Completed',
    },
  ];

  onEditCourse(course: any) {
    console.log('Edit clicked for course:', course);
  }

  onDeleteCourse(course: any) {
    console.log('Delete clicked for course:', course);
  }
}
