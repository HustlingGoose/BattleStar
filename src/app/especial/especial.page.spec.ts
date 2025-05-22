import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EspecialPage } from './especial.page';

describe('EspecialPage', () => {
  let component: EspecialPage;
  let fixture: ComponentFixture<EspecialPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
