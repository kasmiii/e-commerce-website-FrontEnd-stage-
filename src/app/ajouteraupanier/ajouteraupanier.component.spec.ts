import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouteraupanierComponent } from './ajouteraupanier.component';

describe('AjouteraupanierComponent', () => {
  let component: AjouteraupanierComponent;
  let fixture: ComponentFixture<AjouteraupanierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouteraupanierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouteraupanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
