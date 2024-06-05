import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoassComponent } from './moass.component';

describe('MoassComponent', () => {
  let component: MoassComponent;
  let fixture: ComponentFixture<MoassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoassComponent]
    });
    fixture = TestBed.createComponent(MoassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
