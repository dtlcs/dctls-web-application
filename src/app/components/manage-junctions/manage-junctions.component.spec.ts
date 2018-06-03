import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ManageJunctionsComponent} from './manage-junctions.component';

describe('ManageJunctionsComponent', () => {
    let component: ManageJunctionsComponent;
    let fixture: ComponentFixture<ManageJunctionsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ManageJunctionsComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ManageJunctionsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
