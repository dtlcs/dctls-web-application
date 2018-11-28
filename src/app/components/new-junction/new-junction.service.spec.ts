import {inject, TestBed} from '@angular/core/testing';

import {NewJunctionService} from './new-junction.service';

describe('NewJunctionService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [NewJunctionService]
        });
    });

    it('should be created', inject([NewJunctionService], (service: NewJunctionService) => {
        expect(service).toBeTruthy();
    }));
});
