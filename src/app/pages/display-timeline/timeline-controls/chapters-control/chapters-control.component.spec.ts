import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaptersControlComponent } from './chapters-control.component';

describe('ChaptersControlComponent', () => {
  let component: ChaptersControlComponent;
  let fixture: ComponentFixture<ChaptersControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChaptersControlComponent]
    });
    fixture = TestBed.createComponent(ChaptersControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
