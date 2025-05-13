import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { MaterialOrderService } from '../services/material-order.service';
import { MaterialOrder } from '../models/material-order.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-materialorder',
  templateUrl: './materialorder.component.html',
  styleUrls: ['./materialorder.component.scss']
})
export class MaterialorderComponent implements OnInit {
  materialOrderForm: FormGroup = this.fb.group({
    materialName: ['', [Validators.required]],
    characteristics: this.fb.array([]),
    inventory: this.fb.group({
      currentStock: [0, [Validators.required, Validators.min(0)]],
      minStock: [0, [Validators.required, Validators.min(0)]],
      location: ['', Validators.required]
    }),
    plants: this.fb.array([]),
    supplier: this.fb.group({
      name: ['', Validators.required],
      code: ['', Validators.required],
      leadTime: [0, [Validators.required, Validators.min(1)]],
      unitPrice: [0, [Validators.required, Validators.min(0)]]
    })
  });

  constructor(
    private fb: FormBuilder,
    private materialOrderService: MaterialOrderService,
    private snackBar: MatSnackBar
  ) {}


  isFieldInvalid(path: string): boolean {
    const field = this.materialOrderForm.get(path);
    return field ? (field.invalid && (field.dirty || field.touched)) : false;
  }

  getErrorMessage(path: string): string {
    const control = this.materialOrderForm.get(path);
    if (control?.errors) {
      if (control.errors['required']) return 'This field is required';
      if (control.errors['min']) return 'Value must be greater than or equal to 0';
      if (control.errors['email']) return 'Invalid email format';
    }
    return '';
  }

  ngOnInit(): void {}

  get characteristics() {
    return this.materialOrderForm.get('characteristics') as FormArray;
  }

  get plants() {
    return this.materialOrderForm.get('plants') as FormArray;
  }

  addCharacteristic() {
    const characteristic = this.fb.group({
      name: [''],
      value: ['']
    });
    this.characteristics.push(characteristic);
  }

  removeCharacteristic(index: number) {
    this.characteristics.removeAt(index);
  }

  addPlant() {
    const plant = this.fb.group({
      name: [''],
      code: [''],
      quantity: [0]
    });
    this.plants.push(plant);
  }

  removePlant(index: number) {
    this.plants.removeAt(index);
  }

  onSubmit() {
    if (this.materialOrderForm.valid) {
      console.log(this.materialOrderForm.value);
      // Handle form submission
    }
  }
}
