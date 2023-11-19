import { Component, Input } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('imageAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('0.5s', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('0.5s', style({ transform: 'translateX(-100%)' }))
      ])
    ])
  ]
})
export class CarouselComponent {
  @Input() imageUrls: string[] = [];
  currentIndex = 1;

  showNextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.imageUrls.length;
  }

  showPreviousImage() {
    this.currentIndex = (this.currentIndex - 1 + this.imageUrls.length) % this.imageUrls.length;
  }

}
