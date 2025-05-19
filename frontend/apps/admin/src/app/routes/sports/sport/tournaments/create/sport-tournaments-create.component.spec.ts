import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SportTournamentsCreateComponent } from './sport-tournaments-create.component';

describe('SportTournamentsCreateComponent', () => {
  let component: SportTournamentsCreateComponent;
  let fixture: ComponentFixture<SportTournamentsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SportTournamentsCreateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SportTournamentsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
