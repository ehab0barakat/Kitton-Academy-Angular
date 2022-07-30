import { TestBed } from '@angular/core/testing';

import { NormaluserApiService } from './normaluser-api.service';

describe('NormaluserApiService', () => {
  let service: NormaluserApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NormaluserApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
