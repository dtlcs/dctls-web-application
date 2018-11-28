import {inject, TestBed} from '@angular/core/testing';

import {ManageJunctionsService} from './manage-junctions.service';

describe('ManageJunctionsService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ManageJunctionsService]
        });
    });

    it('should be created', inject([ManageJunctionsService], (service: ManageJunctionsService) => {
        expect(service).toBeTruthy();
    }));
});
