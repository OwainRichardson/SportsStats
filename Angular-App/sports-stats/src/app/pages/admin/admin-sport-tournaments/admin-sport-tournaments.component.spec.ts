import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSportTournamentsComponent } from './admin-sport-tournaments.component';

describe('AdminSportTournamentsComponent', () => {
  let component: AdminSportTournamentsComponent;
  let fixture: ComponentFixture<AdminSportTournamentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminSportTournamentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSportTournamentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
