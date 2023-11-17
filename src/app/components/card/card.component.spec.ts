import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CardComponent } from './card.component';
import { ThousandsSeparatorPipe } from 'src/app/utils/pipes/thousands-separator.pipe';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent, ThousandsSeparatorPipe]
    });
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should apply correct colors', () => {
    fixture.detectChanges();

    const bodyElement = fixture.debugElement.query(By.css('.body')).nativeElement;
    expect(getComputedStyle(bodyElement).getPropertyValue('background-color')).toBe('rgb(247, 247, 247)');

    const actualPriceElement = fixture.debugElement.query(By.css('.actual-price')).nativeElement;
    expect(getComputedStyle(actualPriceElement).getPropertyValue('color')).toBe('rgb(34, 34, 34)');

    const discountElement = fixture.debugElement.query(By.css('.text-red')).nativeElement;
    expect(getComputedStyle(discountElement).getPropertyValue('color')).toBe('rgb(220, 54, 46)');
  });
});