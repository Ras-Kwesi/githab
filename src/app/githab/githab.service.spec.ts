import { TestBed, inject } from '@angular/core/testing';

import { GithabService } from './githab.service';

describe('GithabService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithabService]
    });
  });

  it('should be created', inject([GithabService], (service: GithabService) => {
    expect(service).toBeTruthy();
  }));
});
