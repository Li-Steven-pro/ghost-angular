import { TestBed } from '@angular/core/testing';

import { AnimeThemesService } from './anime-themes.service';

describe('AnimeThemesService', () => {
  let service: AnimeThemesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimeThemesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
