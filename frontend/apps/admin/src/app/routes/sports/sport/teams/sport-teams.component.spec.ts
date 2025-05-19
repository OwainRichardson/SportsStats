import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SportTeamsComponent } from './sport-teams.component';

describe('SportTeamsComponent', () => {
  let component: SportTeamsComponent;
  let fixture: ComponentFixture<SportTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SportTeamsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SportTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
