import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListadoPilotosPage } from './listado-pilotos.page';

describe('ListadoPilotosPage', () => {
  let component: ListadoPilotosPage;
  let fixture: ComponentFixture<ListadoPilotosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoPilotosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
