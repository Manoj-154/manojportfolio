import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Intrests } from './intrests';

describe('Intrests', () => {
  let component: Intrests;
  let fixture: ComponentFixture<Intrests>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Intrests]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Intrests);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
