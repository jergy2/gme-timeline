import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SneezeComponent } from './sneeze.component';

describe('SneezeComponent', () => {
  let component: SneezeComponent;
  let fixture: ComponentFixture<SneezeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SneezeComponent]
    });
    fixture = TestBed.createComponent(SneezeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
