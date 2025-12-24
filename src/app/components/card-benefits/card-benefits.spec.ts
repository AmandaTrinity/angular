import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBenefits } from './card-benefits';

describe('CardBenefits', () => {
  let component: CardBenefits;
  let fixture: ComponentFixture<CardBenefits>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardBenefits]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardBenefits);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
