import { TestBed } from '@angular/core/testing';

import { BlaBlaService } from './bla-bla.service';

describe('BlaBlaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlaBlaService = TestBed.get(BlaBlaService);
    expect(service).toBeTruthy();
  });
});
