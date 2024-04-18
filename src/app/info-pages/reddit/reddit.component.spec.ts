import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedditComponent } from './reddit.component';

describe('RedditComponent', () => {
  let component: RedditComponent;
  let fixture: ComponentFixture<RedditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RedditComponent]
    });
    fixture = TestBed.createComponent(RedditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
