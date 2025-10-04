import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashboard } from './dashboard';

describe('Dashboard', () => {
  let component: Dashboard;
  let fixture: ComponentFixture<Dashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dashboard],
    }).compileComponents();

    fixture = TestBed.createComponent(Dashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería tener un título de página', () => {
    expect(component.pageTitle).toBeDefined();
  });

  it('debería tener tarjetas de acción', () => {
    expect(component.cards).toBeDefined();
    expect(component.cards.length).toBeGreaterThan(0);
  });
});
