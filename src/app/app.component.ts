import { Component, HostListener, OnInit } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  @HostListener('window:scroll', []) onScroll() {
    this.fadeRightElements();
    this.fadeLeftElements();
    this.fadeElements();
  }

  ngOnInit() {
    this.fadeRightElements(); // Trigger on page load
    this.fadeLeftElements(); // Trigger on page load
    this.fadeElements(); // Trigger on page load
  }

  fadeRightElements() {
    const elements = document.querySelectorAll('.fade-right');

    elements.forEach((element: Element) => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight - 50) {
        element.classList.add('show');
      }
    });
  }

  fadeLeftElements() {
    const elements = document.querySelectorAll('.fade-left');

    elements.forEach((element: Element) => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight - 50) {
        element.classList.add('show');
      }
    });
    
  }

  fadeElements() {
    const fadeElements = document.querySelectorAll(".fade");

    fadeElements.forEach((element: Element) => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight - 50) {
        element.classList.add('show');
        element.classList.remove('hide');
      }
      if (rect.bottom < 100 || rect.top > windowHeight) {
        element.classList.add("hide");
      }
    });
    
  }
  title = 'AxiomRealtyGroup';
}
