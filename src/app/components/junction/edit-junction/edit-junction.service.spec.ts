import { TestBed, inject } from '@angular/core/testing';

import { EditJunctionService } from './edit-junction.service';

describe('EditJunctionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditJunctionService]
    });
  });

  it('should be created', inject([EditJunctionService], (service: EditJunctionService) => {
    expect(service).toBeTruthy();
  }));
});
