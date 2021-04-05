import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemesVerticalListComponent } from './themes-vertical-list.component';

describe('ThemesVerticalListComponent', () => {
  let component: ThemesVerticalListComponent;
  let fixture: ComponentFixture<ThemesVerticalListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemesVerticalListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemesVerticalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
