import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SportsComponent } from './sports.component';
import { provideHttpClient } from '@angular/common/http';

describe('SportsComponent', () => {
  let component: SportsComponent;
  let fixture: ComponentFixture<SportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SportsComponent],
      providers: [provideHttpClient()]
    }).compileComponents();

    fixture = TestBed.createComponent(SportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
