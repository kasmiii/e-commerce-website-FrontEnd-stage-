import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchproduitComponent } from './searchproduit.component';

describe('SearchproduitComponent', () => {
  let component: SearchproduitComponent;
  let fixture: ComponentFixture<SearchproduitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchproduitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchproduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
