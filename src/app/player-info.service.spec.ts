import { TestBed } from '@angular/core/testing';

import { PlayerInfoService } from './player-info.service';

describe('PlayerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlayerInfoService = TestBed.get(PlayerInfoService);
    expect(service).toBeTruthy();
  });
});
