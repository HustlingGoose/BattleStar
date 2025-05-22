import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovedefPage } from './movedef.page';

describe('MovedefPage', () => {
  let component: MovedefPage;
  let fixture: ComponentFixture<MovedefPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MovedefPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
