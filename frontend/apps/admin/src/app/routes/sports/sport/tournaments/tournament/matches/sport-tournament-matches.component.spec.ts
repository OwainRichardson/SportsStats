import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SportTournamentMatchesComponent } from './sport-tournament-matches.component';

describe('SportTournamentMatchesComponent', () => {
  let component: SportTournamentMatchesComponent;
  let fixture: ComponentFixture<SportTournamentMatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SportTournamentMatchesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SportTournamentMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
