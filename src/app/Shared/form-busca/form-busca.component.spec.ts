import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBucaComponent } from './form-busca.component';

describe('FormBucaComponent', () => {
  let component: FormBucaComponent;
  let fixture: ComponentFixture<FormBucaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormBucaComponent]
    });
    fixture = TestBed.createComponent(FormBucaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
