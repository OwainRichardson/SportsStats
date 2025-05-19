import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SportTeamsCreateComponent } from './sport-teams-create.component';

describe('SportTeamsCreateComponent', () => {
  let component: SportTeamsCreateComponent;
  let fixture: ComponentFixture<SportTeamsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SportTeamsCreateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SportTeamsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
