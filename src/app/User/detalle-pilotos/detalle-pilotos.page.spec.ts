import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallePilotosPage } from './detalle-pilotos.page';

describe('DetallePilotosPage', () => {
  let component: DetallePilotosPage;
  let fixture: ComponentFixture<DetallePilotosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallePilotosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
