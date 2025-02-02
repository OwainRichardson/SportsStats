import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSportSettingsComponent } from './admin-sport-settings.component';

describe('AdminSportSettingsComponent', () => {
  let component: AdminSportSettingsComponent;
  let fixture: ComponentFixture<AdminSportSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminSportSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSportSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
