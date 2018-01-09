import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JunctionProfileComponent } from './junction-profile.component';

describe('JunctionProfileComponent', () => {
  let component: JunctionProfileComponent;
  let fixture: ComponentFixture<JunctionProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JunctionProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JunctionProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
