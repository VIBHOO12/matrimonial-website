import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferenciatorComponent } from './differenciator.component';

describe('DifferenciatorComponent', () => {
  let component: DifferenciatorComponent;
  let fixture: ComponentFixture<DifferenciatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DifferenciatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DifferenciatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
