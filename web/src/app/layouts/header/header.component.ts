import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() componentSelected = new EventEmitter<string>();

  selectComponent(component: string): void {
    this.componentSelected.emit(component);
  }
}
