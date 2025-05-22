import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevoPilotoPage } from './nuevo-piloto.page';

describe('NuevoPilotoPage', () => {
  let component: NuevoPilotoPage;
  let fixture: ComponentFixture<NuevoPilotoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoPilotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
