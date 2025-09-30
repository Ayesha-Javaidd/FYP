import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css'
})
export class DataTableComponent {
  /** Table title */
  @Input() title = 'Data Table';

  /** Columns to display */
  @Input() columns: TableColumn[] = [];

  /** Data rows */
  @Input() rows: any[] = [];

  /** Show View All button */
  @Input() showViewAll: boolean = false;

  /** Optional row click event */
  @Input() rowClickable: boolean = false;

  /** Row actions toggle */
  @Input() enableActions: boolean = false;

  /** Emits when an action is triggered */
  @Output() edit = new EventEmitter();
  @Output() delete = new EventEmitter();

  onEdit(row: any) {
    this.edit.emit(row);
  }

  onDelete(row: any) {
    this.delete.emit(row);
  }
}

export interface TableColumn {
  key: string;                        // property name in row object
  label: string;                      // column header label
  type?: 'text' | 'badge' | 'avatar'; // special rendering
  badgeColors?: {                     // used only when type = 'badge'
    [key: string]: string
  };
}
