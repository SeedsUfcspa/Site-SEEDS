import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Extensao } from './extensao';

describe('Extensao', () => {
  let component: Extensao;
  let fixture: ComponentFixture<Extensao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Extensao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Extensao);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
