import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchInterfaceComponent } from './search-interface.component';

describe('SearchInterfaceComponent', () => {
  let component: SearchInterfaceComponent;
  let fixture: ComponentFixture<SearchInterfaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchInterfaceComponent]
    });
    fixture = TestBed.createComponent(SearchInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
