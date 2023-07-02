import { Component, OnInit } from '@angular/core';
import { ProductCategoriesService } from '../../service/product-categories.service';
import { Paging } from '../../model/paging.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductCategoryModel } from 'src/app/model/product-category/product-category.model';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-product-category-list',
  templateUrl: './product-category-list.component.html',
})
export class ProductCategoryListComponent implements OnInit {
  public categories: ProductCategoryModel[] = [];
  public paging: Paging = { page: 0, size: 10 };
  public totalRecords = 0;

  constructor(
    private categoriesService: ProductCategoriesService,
    private authService: MsalService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.authService.initialize().subscribe(() => {
      this.categoriesService.listEntites(this.paging).subscribe(response => {
        if (!response) {
          return;
        }

        this.categories = response.result;
        this.totalRecords = response.totalRecords;
      });
    });
  }

  public deleteCategory(id: string): void {
    this.categoriesService.deleteEntity(id).subscribe(() => {
      this.router
        .navigateByUrl('/refresh', { skipLocationChange: true })
        .then(() => {
          this.router.navigate(['/categories']);
        });
    });
  }

  public editCategory(id: number): void {
    this.router.navigate(['edit', id], { relativeTo: this.route });
  }

  public createCategory(): void {
    this.router.navigate(['create'], { relativeTo: this.route });
  }

  public onPageChange(event: any) {
    this.paging = { page: Number(event.page), size: Number(event.rows) };
    this.categoriesService.listEntites(this.paging).subscribe(x => {
      this.categories = [...x.result];
      this.totalRecords = x.totalRecords;
    });
  }
}
