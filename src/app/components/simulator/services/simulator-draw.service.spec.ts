import { TestBed, inject } from '@angular/core/testing';

import { SimulatorDrawService } from './simulator-draw.service';

describe('SimulatorDrawService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SimulatorDrawService]
    });
  });

  it('should be created', inject([SimulatorDrawService], (service: SimulatorDrawService) => {
    expect(service).toBeTruthy();
  }));
});
