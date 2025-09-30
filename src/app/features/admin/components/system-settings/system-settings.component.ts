import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

@Component({
  selector: 'app-system-settings',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonComponent],
  templateUrl: './system-settings.component.html',
  styleUrls: ['./system-settings.component.css'],
})
export class SystemSettingsComponent {
  onAddUser() {}
  onFileChange(event: Event) {}
}
