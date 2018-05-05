import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EditJunctionComponent} from './edit-junction.component';

describe('EditJunctionComponent', () => {
  let component: EditJunctionComponent;
  let fixture: ComponentFixture<EditJunctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditJunctionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditJunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
