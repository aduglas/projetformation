import { TestBed } from '@angular/core/testing';

import { FrmCurrentUserService } from './frm-current-user.service';

describe('FrmCurrentUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FrmCurrentUserService = TestBed.get(FrmCurrentUserService);
    expect(service).toBeTruthy();
  });
});
