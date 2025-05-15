import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SportsCreateComponent } from './sports-create.component';

describe('SportsCreateComponent', () => {
  let component: SportsCreateComponent;
  let fixture: ComponentFixture<SportsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SportsCreateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SportsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
