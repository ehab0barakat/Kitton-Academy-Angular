import { TestBed } from '@angular/core/testing';

import { SignUpUserService } from './sign-up-user.service';

describe('SignUpUserService', () => {
  let service: SignUpUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignUpUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
