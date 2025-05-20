import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SportTournamentMatchesCreateComponent } from './sport-tournament-matches-create.component';

describe('SportTournamentMatchesCreateComponent', () => {
  let component: SportTournamentMatchesCreateComponent;
  let fixture: ComponentFixture<SportTournamentMatchesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SportTournamentMatchesCreateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SportTournamentMatchesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
