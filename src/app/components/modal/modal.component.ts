import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FieldConfig } from 'src/app/interfaces/fieldconfig.interface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit{

  constructor(public activeModal: NgbActiveModal) { }

  productForm!: FormGroup;
  @Input() formConfig: FieldConfig[] = [];

  ngOnInit() {
    const group: any = {};

    this.formConfig.forEach(field => {
      group[field.name] = new FormControl('', field.validation);
    });

    this.productForm = new FormGroup(group);
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  onSubmit() {
    console.log(this.productForm.value);
    this.closeModal();
  }

}
