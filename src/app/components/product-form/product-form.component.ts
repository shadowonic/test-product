import { Component } from '@angular/core';
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

  constructor(private fb: FormBuilder, private prodService: ProductService) {
    this.createForm();
  }

  createForm() {
    this.productForm = this.fb.group({
      title: ['', Validators.required],
      text: ['', Validators.required],
      image: [null, Validators.required]
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
    }
  }
}
