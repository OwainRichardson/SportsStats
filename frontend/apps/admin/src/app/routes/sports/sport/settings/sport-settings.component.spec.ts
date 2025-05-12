import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SportSettingsComponent } from './sport-settings.component';

describe('SportSettingsComponent', () => {
  let component: SportSettingsComponent;
  let fixture: ComponentFixture<SportSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SportSettingsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SportSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
