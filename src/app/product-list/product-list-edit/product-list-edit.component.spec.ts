import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ServiceModule } from 'src/app/service/service.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductListEditComponent } from './product-list-edit.component';

xdescribe('ProductListEditComponent', () => {
  let component: ProductListEditComponent;
  let fixture: ComponentFixture<ProductListEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        ServiceModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      declarations: [ProductListEditComponent],
    });
    fixture = TestBed.createComponent(ProductListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
