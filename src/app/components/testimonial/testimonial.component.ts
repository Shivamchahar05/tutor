import { Component } from '@angular/core';
import { testimonials } from 'src/app/utils/testimonial/testimonial';
// import { NgbCarousel, NgbCarouselModule, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent {
  testimonials =testimonials
  currentSlide = 0;
  intervalId: any;

  ngOnInit(): void {
    this.startAutoSlide();
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000); // Auto slide every 5 seconds
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide > 0) ? this.currentSlide - 1 : this.testimonials.length - 1;
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide < this.testimonials.length - 1) ? this.currentSlide + 1 : 0;
  }

  // Calculate previous slide index
  prevSlideIndex() {
    return (this.currentSlide === 0) ? this.testimonials.length - 1 : this.currentSlide - 1;
  }

  // Calculate next slide index
  nextSlideIndex() {
    return (this.currentSlide === this.testimonials.length - 1) ? 0 : this.currentSlide + 1;
  }
  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId); // Clean up the interval when the component is destroyed
    }
  }
}
