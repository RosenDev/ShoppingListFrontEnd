import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ServiceModule } from 'src/app/service/service.module';
import { ProductListListComponent } from './product-list-list.component';

xdescribe('ProductListListComponent', () => {
  let component: ProductListListComponent;
  let fixture: ComponentFixture<ProductListListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ServiceModule, RouterTestingModule],
      declarations: [ProductListListComponent],
    });
    fixture = TestBed.createComponent(ProductListListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
