import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SportTournamentsComponent } from './sport-tournaments.component';

describe('SportTournamentsComponent', () => {
  let component: SportTournamentsComponent;
  let fixture: ComponentFixture<SportTournamentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SportTournamentsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SportTournamentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
