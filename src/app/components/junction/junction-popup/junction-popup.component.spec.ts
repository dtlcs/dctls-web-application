import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JunctionPopupComponent } from './junction-popup.component';

describe('JunctionPopupComponent', () => {
  let component: JunctionPopupComponent;
  let fixture: ComponentFixture<JunctionPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JunctionPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JunctionPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
