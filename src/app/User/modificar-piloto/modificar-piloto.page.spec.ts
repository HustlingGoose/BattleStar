import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModificarPilotoPage } from './modificar-piloto.page';

describe('ModificarPilotoPage', () => {
  let component: ModificarPilotoPage;
  let fixture: ComponentFixture<ModificarPilotoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarPilotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
