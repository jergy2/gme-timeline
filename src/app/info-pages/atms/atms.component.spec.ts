import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmsComponent } from './atms.component';

describe('AtmsComponent', () => {
  let component: AtmsComponent;
  let fixture: ComponentFixture<AtmsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtmsComponent]
    });
    fixture = TestBed.createComponent(AtmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
