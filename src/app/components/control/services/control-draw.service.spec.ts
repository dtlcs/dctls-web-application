import { TestBed, inject } from '@angular/core/testing';

import { ControlDrawService } from './control-draw.service';

describe('ControlDrawService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ControlDrawService]
    });
  });

  it('should be created', inject([ControlDrawService], (service: ControlDrawService) => {
    expect(service).toBeTruthy();
  }));
});
