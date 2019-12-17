import { TestBed } from '@angular/core/testing';

import { FrmUserService } from './frm-user.service';

describe('FrmUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FrmUserService = TestBed.get(FrmUserService);
    expect(service).toBeTruthy();
  });
});
