import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProdutoFormComponent } from './add-produto-form.component';

describe('AddProdutoFormComponent', () => {
  let component: AddProdutoFormComponent;
  let fixture: ComponentFixture<AddProdutoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProdutoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProdutoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
