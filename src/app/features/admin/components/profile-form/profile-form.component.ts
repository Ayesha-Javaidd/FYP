import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

@Component({
  selector: 'app-profile-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent],
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css'],
})
export class ProfileFormComponent {
  profileForm: FormGroup;
  profilePreview: string | ArrayBuffer | null = '';

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10,15}$/)]],
      country: ['', Validators.required],
      profilePicture: [null], // file control
    });
  }

  // Handle file upload + preview
  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      this.profileForm.patchValue({ profilePicture: file });

      const reader = new FileReader();
      reader.onload = () => (this.profilePreview = reader.result);
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    if (this.profileForm.valid) {
      console.log('Profile Settings Data:', this.profileForm.value);
      alert('Profile updated successfully');
    } else {
      this.profileForm.markAllAsTouched();
    }
  }
}
