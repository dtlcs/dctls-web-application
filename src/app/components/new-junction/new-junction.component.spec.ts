import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NewJunctionComponent} from './new-junction.component';

describe('NewJunctionComponent', () => {
    let component: NewJunctionComponent;
    let fixture: ComponentFixture<NewJunctionComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NewJunctionComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NewJunctionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
