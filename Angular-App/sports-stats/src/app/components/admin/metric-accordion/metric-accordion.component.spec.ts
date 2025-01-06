import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricAccordionComponent } from './metric-accordion.component';

describe('MetricAccordionComponent', () => {
  let component: MetricAccordionComponent;
  let fixture: ComponentFixture<MetricAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetricAccordionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetricAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
