import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';

import { ProductService } from '../../services/product.service';
import { Product } from '../../types';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {
  productForm: FormGroup;

  constructor(private fb: FormBuilder, private prodService: ProductService,
    private cd: ChangeDetectorRef) {
    this.createForm();
  }

  createForm() {
    this.productForm = this.fb.group({
      title: [''],
      text: [''],
      image: [null]
    });
  }
  onSubmit() {
    console.log(this.productForm);
    this.prodService.postProduct(this.productForm.value);
  }
  onFileChange(event) {
    const reader = new FileReader();
    console.log(reader);


    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      console.log(file);
      this.productForm.patchValue({
        image: file
      });



      // reader.onload = () => {

      //   console.log(reader.result);
      //   this.productForm.patchValue({
      //     image: file
      //   });

      // need to run CD since file load runs outside of zone
      // this.cd.markForCheck();
      // };
    }
  }
}
