import { TestBed } from '@angular/core/testing';

import { FetchScheduleService } from './fetch-schedule.service';

describe('FetchScheduleService', () => {
  let service: FetchScheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchScheduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
