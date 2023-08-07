import { Validators } from "@angular/forms";
import { FieldConfig } from "../interfaces/fieldconfig.interface";

export function getProductFormFields(): FieldConfig[]{
  return  [
    { name: 'name', label: 'Name', type: 'text', validation: [Validators.required] },
    { name: 'photo', label: 'Photo URL', type: 'text', validation: [] },
    { name: 'group', label: 'Group', type: 'text', validation: [] },
    { name: 'lastPurchase', label: 'Last Purchase', type: 'date', validation: [] },
    { name: 'qtt', label: 'Quantity', type: 'number', validation: [Validators.required] },
    { name: 'minimum', label: 'Minimum', type: 'number', validation: [Validators.required] },
    { name: 'available', label: 'Available', type: 'checkbox', validation: [] }
  ];
}
