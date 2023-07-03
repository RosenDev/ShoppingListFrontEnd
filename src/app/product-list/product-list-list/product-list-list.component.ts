import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { Paging } from '../../model/paging.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import { ProductModel } from 'src/app/model/product/product.model';

@Component({
  selector: 'app-product-list-list',
  templateUrl: './product-list-list.component.html',
})
export class ProductListListComponent implements OnInit {
  public products: ProductModel[] = [];
  public paging: Paging = { page: 0, size: 10 };
  public totalRecords = 0;

  constructor(
    private productsService: ProductsService,
    private authService: MsalService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.authService.initialize().subscribe(() => {
      this.productsService.listEntites(this.paging).subscribe(response => {
        if (!response) {
          return;
        }

        this.products = response.result;
        this.totalRecords = response.totalRecords;
      });
    });
  }

  public deleteProduct(id: string): void {
    this.productsService.deleteEntity(id).subscribe(() => {
      this.router
        .navigateByUrl('/refresh', { skipLocationChange: true })
        .then(() => {
          this.router.navigate(['/products']);
        });
    });
  }

  public editProduct(id: number): void {
    this.router.navigate(['edit', id], { relativeTo: this.route });
  }

  public createProduct(): void {
    this.router.navigate(['create'], { relativeTo: this.route });
  }

  public onPageChange(event: any) {
    this.paging = { page: Number(event.page), size: Number(event.rows) };
    this.productsService.listEntites(this.paging).subscribe(x => {
      this.products = [...x.result];
      this.totalRecords = x.totalRecords;
    });
  }
}
