import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieMenuComponent } from './movie-menu.component';

describe('MenuComponent', () => {
  let component: MovieMenuComponent;
  let fixture: ComponentFixture<MovieMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
