import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperstonkComponent } from './superstonk.component';

describe('SuperstonkComponent', () => {
  let component: SuperstonkComponent;
  let fixture: ComponentFixture<SuperstonkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperstonkComponent]
    });
    fixture = TestBed.createComponent(SuperstonkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
