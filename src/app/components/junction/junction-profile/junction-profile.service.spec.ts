import { TestBed, inject } from '@angular/core/testing';

import { JunctionProfileService } from './junction-profile.service';

describe('JunctionProfileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JunctionProfileService]
    });
  });

  it('should be created', inject([JunctionProfileService], (service: JunctionProfileService) => {
    expect(service).toBeTruthy();
  }));
});
