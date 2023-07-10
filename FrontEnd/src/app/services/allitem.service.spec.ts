import { TestBed } from '@angular/core/testing';

import { AllitemService } from './allitem.service';

describe('AllitemService', () => {
  let service: AllitemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllitemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
