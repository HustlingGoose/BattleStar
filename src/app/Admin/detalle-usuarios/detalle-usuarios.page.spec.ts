import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleUsuariosPage } from './detalle-usuarios.page';

describe('DetalleUsuariosPage', () => {
  let component: DetalleUsuariosPage;
  let fixture: ComponentFixture<DetalleUsuariosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleUsuariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
