import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {JunctionHistoryComponent} from './junction-history.component';

describe('JunctionHistoryComponent', () => {
  let component: JunctionHistoryComponent;
  let fixture: ComponentFixture<JunctionHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [JunctionHistoryComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JunctionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
