import { ValidatorFn } from "@angular/forms";

export interface FieldConfig {
  name: string;
  label: string;
  type: 'text' | 'number' | 'date' | 'checkbox' | 'textarea';
  validation: ValidatorFn[];
}
