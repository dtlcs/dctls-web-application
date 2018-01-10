import { TestBed, inject } from '@angular/core/testing';

import { VideoFeedService } from './video-feed.service';

describe('VideoFeedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VideoFeedService]
    });
  });

  it('should be created', inject([VideoFeedService], (service: VideoFeedService) => {
    expect(service).toBeTruthy();
  }));
});
