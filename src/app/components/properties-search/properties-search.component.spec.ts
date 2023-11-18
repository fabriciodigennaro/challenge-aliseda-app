import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PropertiesSearchComponent } from './properties-search.component';
import { ButtonComponent} from '../shared/button/button.component';

describe('DashboardComponent', () => {
  let component: PropertiesSearchComponent;
  let fixture: ComponentFixture<PropertiesSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertiesSearchComponent, ButtonComponent],
      imports: [HttpClientTestingModule],
    });

    fixture = TestBed.createComponent(PropertiesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

