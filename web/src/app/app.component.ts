import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('aboutSection') aboutSection!: ElementRef;
  @ViewChild('portfolioSection') portfolioSection!: ElementRef;

  scrollToSection(section: string): void {
    let element: HTMLElement | undefined;

    if (section === 'about') {
      element = this.aboutSection.nativeElement;
    } else if (section === 'portfolio') {
      element = this.portfolioSection.nativeElement;
    }

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error(`No se pudo encontrar la sección: ${section}`);
    }
  }
}
