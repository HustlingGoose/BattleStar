import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DondeempezarPage } from './dondeempezar.page';

describe('DondeempezarPage', () => {
  let component: DondeempezarPage;
  let fixture: ComponentFixture<DondeempezarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DondeempezarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
