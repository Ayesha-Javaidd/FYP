import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ButtonComponent } from '../button/button.component';

interface MenuItem {
  icon: string;
  label: string;
  path: string;
  active?: boolean;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  @Output() toggleSidebar = new EventEmitter<boolean>();
  isOpen: boolean = true;
  constructor(private router: Router) {}

  menuItems: MenuItem[] = [
    {
      icon: 'fa-solid fa-chart-pie',
      label: 'Dashboard',
      path: '/dashboard',
      active: true,
    },
    { icon: 'fa-solid fa-book', label: 'Courses', path: '/courses' },
    { icon: 'fa-solid fa-users', label: 'Users', path: '/users' },
    { icon: 'fa-solid fa-cog', label: 'Settings', path: '/settings' },
  ];

  toggle() {
    this.isOpen = !this.isOpen;
    this.toggleSidebar.emit(this.isOpen);
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
