import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAcountComponent } from './create-acount.component';

describe('CreateAcountComponent', () => {
  let component: CreateAcountComponent;
  let fixture: ComponentFixture<CreateAcountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateAcountComponent]
    });
    fixture = TestBed.createComponent(CreateAcountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
