import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SportTournamentSettingsComponent } from './sport-tournament-settings.component';

describe('SportTournamentSettingsComponent', () => {
  let component: SportTournamentSettingsComponent;
  let fixture: ComponentFixture<SportTournamentSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SportTournamentSettingsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SportTournamentSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
