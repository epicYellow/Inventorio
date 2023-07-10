import { TestBed } from '@angular/core/testing';

import { PersonalItemsService } from './personal-items.service';

describe('PersonalItemsService', () => {
  let service: PersonalItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonalItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
