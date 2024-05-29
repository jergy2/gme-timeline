import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoaringKittyComponent } from './roaring-kitty.component';

describe('RoaringKittyComponent', () => {
  let component: RoaringKittyComponent;
  let fixture: ComponentFixture<RoaringKittyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoaringKittyComponent]
    });
    fixture = TestBed.createComponent(RoaringKittyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
