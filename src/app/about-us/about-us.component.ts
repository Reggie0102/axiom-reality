import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

  ngOnInit() {
    console.log("On init");
    
  // document.addEventListener("DOMContentLoaded", function () {
  //   const fadeElements = document.querySelectorAll(".fade");
  //   const fadeRightElements = document.querySelectorAll(".fade-right");

  //   function fadeInOnScroll() {
  //     fadeRightElements.forEach((element) => {
  //       const elementTop = element.getBoundingClientRect().top;
  //       const windowHeight = window.innerHeight;

  //       if (elementTop < windowHeight - 50) {
  //         element.classList.add("show");
  //       }
  //     });
  //   }

  //   window.addEventListener("scroll", handler);

  //   function handleFadeEffect() {
  //     fadeElements.forEach((element) => {
  //       const elementTop = element.getBoundingClientRect().top;
  //       const windowHeight = window.innerHeight;
  //       const elementBottom = element.getBoundingClientRect().bottom;

  //       if (elementTop < windowHeight - 50) {
  //         element.classList.add("show");
  //         element.classList.remove("hide");
  //       } 
  //       if (elementBottom < 100 || elementTop > windowHeight) {
  //         element.classList.add("hide");
  //       }
  //     });
  //   }

  //   function handler() {
  //     handleFadeEffect();
  //     fadeInOnScroll();
  //   }
  //   handleFadeEffect(); // Trigger on load

  //   fadeInOnScroll();
  // });
  }
}
