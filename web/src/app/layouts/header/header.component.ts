import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() sectionSelected = new EventEmitter<string>();

  scrollToSection(section: string): void {
    this.sectionSelected.emit(section);
  }
}
