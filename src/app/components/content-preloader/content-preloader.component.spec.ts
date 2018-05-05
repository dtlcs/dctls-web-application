import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ContentPreloaderComponent} from './content-preloader.component';

describe('ContentPreloaderComponent', () => {
  let component: ContentPreloaderComponent;
  let fixture: ComponentFixture<ContentPreloaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContentPreloaderComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentPreloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
