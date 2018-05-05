import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AppPreloaderComponent} from './app-preloader.component';

describe('AppPreloaderComponent', () => {
  let component: AppPreloaderComponent;
  let fixture: ComponentFixture<AppPreloaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppPreloaderComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPreloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
