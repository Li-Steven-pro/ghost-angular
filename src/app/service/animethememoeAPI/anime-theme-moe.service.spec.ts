import { TestBed } from '@angular/core/testing';

import { AnimeThemeMoeService } from './anime-theme-moe.service';

describe('AnimeThemeMoeService', () => {
  let service: AnimeThemeMoeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimeThemeMoeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
