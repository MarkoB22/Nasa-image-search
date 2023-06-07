import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstResultDisplayComponent } from './first-result-display.component';

describe('FirstResultDisplayComponent', () => {
  let component: FirstResultDisplayComponent;
  let fixture: ComponentFixture<FirstResultDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstResultDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstResultDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
