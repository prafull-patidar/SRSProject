import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDemoFormComponent } from './product-demo-form.component';

describe('ProductDemoFormComponent', () => {
  let component: ProductDemoFormComponent;
  let fixture: ComponentFixture<ProductDemoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDemoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDemoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
