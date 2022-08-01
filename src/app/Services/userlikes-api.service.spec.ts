import { TestBed } from '@angular/core/testing';

import { UserlikesApiService } from './userlikes-api.service';

describe('UserlikesApiService', () => {
  let service: UserlikesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserlikesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
