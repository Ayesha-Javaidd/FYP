import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import {
  DataTableComponent,
  TableColumn,
} from '../../../../shared/components/data-table/data-table.component';
@Component({
  selector: 'app-users',
  imports: [HeaderComponent, ButtonComponent, DataTableComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  onAddUser() {}
  onFilterByRole() {}
  onFilterByStatus() {}
  onPageSelect(page: string) {}
  onNextPage() {}
  onPrevPage() {}

  userColumns: TableColumn[] = [
    { key: 'avatar', label: 'User', type: 'avatar' },
    { key: 'role', label: 'Role', type: 'text' },
    {
      key: 'status',
      label: 'Status',
      type: 'badge',
      badgeColors: {
        Enrolled: 'bg-green-100 text-green-800',
        Graduated: 'bg-blue-100 text-blue-800',
        Dropped: 'bg-red-100 text-red-800',
        Active: 'bg-green-100 text-green-800',
        Inactive: 'bg-red-100 text-red-800',
      },
    },
  ];

  users = [
    // Students
    {
      id: 1,
      role: 'Student',
      name: 'Ali Khan',
      email: 'ali.khan@example.com',
      status: 'Enrolled',
      avatar: 'AK',
    },
    {
      id: 2,
      role: 'Student',
      name: 'Sara Malik',
      email: 'sara.malik@example.com',
      status: 'Graduated',
      avatar: 'SM',
    },

    // Teachers / Admins
    {
      id: 3,
      role: 'Teacher',
      name: 'John Doe',
      email: 'john.doe@example.com',
      status: 'Active',
      avatar: 'JD',
    },
    {
      id: 4,
      role: 'Sub-Admin',
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      status: 'Active',
      avatar: 'JS',
    },
    {
      id: 5,
      role: 'Teacher',
      name: 'Robert Brown',
      email: 'robert.brown@example.com',
      status: 'Inactive',
      avatar: 'RB',
    },
  ];

  onEditUser(row: any) {
    console.log('Edit clicked for:', row);
  }

  onDeleteUser(row: any) {
    console.log('Delete clicked for:', row);
  }
}
