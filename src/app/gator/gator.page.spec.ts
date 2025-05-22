import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GATORPage } from './gator.page';

describe('GATORPage', () => {
  let component: GATORPage;
  let fixture: ComponentFixture<GATORPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GATORPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
