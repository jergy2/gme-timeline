import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsControlsComponent } from './settings-controls.component';

describe('SettingsControlsComponent', () => {
  let component: SettingsControlsComponent;
  let fixture: ComponentFixture<SettingsControlsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsControlsComponent]
    });
    fixture = TestBed.createComponent(SettingsControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
