import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieButtonComponent } from './movie-button.component';

describe('MovieButtonComponent', () => {
  let component: MovieButtonComponent;
  let fixture: ComponentFixture<MovieButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
