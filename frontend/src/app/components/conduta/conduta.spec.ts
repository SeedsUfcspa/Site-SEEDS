import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Conduta } from './conduta';

describe('Conduta', () => {
  let component: Conduta;
  let fixture: ComponentFixture<Conduta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Conduta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Conduta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
