import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BorrarUsuarioPage } from './borrar-usuario.page';

describe('BorrarUsuarioPage', () => {
  let component: BorrarUsuarioPage;
  let fixture: ComponentFixture<BorrarUsuarioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
