import { Component, OnInit } from '@angular/core';
import { Paging } from '../../model/paging.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductCategoryModel } from 'src/app/model/product-category/product-category.model';
import { MsalService } from '@azure/msal-angular';
import { ProductCategoriesService } from 'src/app/service/product-categories.service';

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

  public editCategory(id: string): void {
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
