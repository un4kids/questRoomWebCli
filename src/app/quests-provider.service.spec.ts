import { TestBed } from '@angular/core/testing';

import { QuestsProviderService } from './quests-provider.service';

describe('QuestsProviderService', () => {
  let service: QuestsProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestsProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
