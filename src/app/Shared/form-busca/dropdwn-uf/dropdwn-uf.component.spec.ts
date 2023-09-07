import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdwnUfComponent } from './dropdwn-uf.component';

describe('DropdwnUfComponent', () => {
  let component: DropdwnUfComponent;
  let fixture: ComponentFixture<DropdwnUfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropdwnUfComponent]
    });
    fixture = TestBed.createComponent(DropdwnUfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
