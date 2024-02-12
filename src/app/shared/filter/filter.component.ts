import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, OnInit, inject } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, AbstractControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable, map, startWith } from 'rxjs';
import { message } from 'src/app/utilities/functions/message';
import { filter } from 'src/app/utilities/variables/filter';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  formBuilder = inject(FormBuilder);
  form!: FormGroup;
  fields:any[]=filter[this.data.listName].fields;
  operators:any=filter[this.data.listName].operators;
  filteredOptions: Array<Observable<{ label: string, value: string }[]>> = [];
  valueOptions: Array<Observable<any[]>> = [];
  minOptions: Array<Observable<any[]>> = [];
  maxOptions: Array<Observable<any[]>> = [];
  constructor(public dialogRef: MatDialogRef<ListComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,) {}
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      filters: this.formBuilder.array([]),
    });
    this.AddFilter();
  }
  get filtersForm(): any {
    return this.form.get('filters') as FormArray;
  }
  private _filterField(value: string, array: any, selectedFields: string[]): any[] {
    const filterValue = value.toLowerCase();
    const options = [...array];

    // Show all options if the filter value is empty
    if (!filterValue) {
      return options.filter((option: any) => !selectedFields.includes(option.value));
    }
    // Exclude the selected fields from the options
    const availableOptions = options.filter((option: any) => !selectedFields.includes(option.value));

    // Filter the available options based on the input value
    return availableOptions.filter((option: any) => option.label.toLowerCase().includes(filterValue));
  }
  private _filterValue(value: any, allValues: string[]): string[] {
    const filterValue = value.toString().toLowerCase();
    return allValues.filter((val: any) => val.toString().toLowerCase().includes(filterValue));
  }
  validateOptionField() {
    return (control: AbstractControl): { invalidOption: boolean, message?: string } | null => {
      const value = control.value;
      const isValid = this.fields.some((option: { value: any; }) => option.value === value);
      return isValid ? null : { invalidOption: true, message: 'Selecciona una opción válida' };
    };
  }
  validateOptionValue() {
    return (control: AbstractControl): { invalidOption: boolean, message?: string } | null => {
      const valueControl = control.value;
      const fieldControl = control.parent?.get('field')?.value;
      const fieldValues = this.data.dataFilter[fieldControl];
      if (Array.isArray(fieldValues) && fieldValues.includes(valueControl)) {
        return null;  // El valor es válido
      }
      return { invalidOption: true, message: 'Selecciona una opción válida' };
    };
  }
  AddFilter(): void {
    if (this.filtersForm.length < this.fields.length) {
      const control: any = this.formBuilder.group({
        field: ['', [this.validateOptionField()]],
        operator: [{ value: '', disabled: true }],
        value: [{ value: '', disabled: true }],
        min: [{ value: '', disabled: true }],
        max: [{ value: '', disabled: true }],
      });

      const field: any = control.get('field');
      const operator: any = control.get('operator');
      const value: any = control.get('value');
      const min: any = control.get('min');
      const max: any = control.get('max');

      this.filtersForm.push(control);

      const updateSelectedFields = () => {
        const selectedFields: string[] = this.filtersForm.controls
          .map((c: any) => c.get('field').value)
          .filter((value: string) => value);

        this.filteredOptions = this.filtersForm.controls.map((formControl: any, index: any) => {
          return formControl.get('field').valueChanges.pipe(
            startWith(field.value),
            map((value: any) => this._filterField(value, this.fields, selectedFields))
          );
        });
      };

      this.valueOptions.push(
        value.valueChanges.pipe(
          startWith(''),
          map((value) => this._filterValue(value || '', this.data.dataFilter[field.value] ? this.data.dataFilter[field.value] : []))
        )
      );

      this.minOptions.push(
        min.valueChanges.pipe(
          startWith(''),
          map((value) => this._filterValue(value || '', this.data.dataFilter[field.value] ? this.data.dataFilter[field.value] : []))
        )
      );

      this.maxOptions.push(
        max.valueChanges.pipe(
          startWith(''),
          map((value) => this._filterValue(value || '', this.data.dataFilter[field.value] ? this.data.dataFilter[field.value] : []))
        )
      );

      field.valueChanges.subscribe((selectField: any) => {
        operator.setValue('');
        operator.enable();
        operator.setValidators([Validators.required]);
        operator.updateValueAndValidity();
        updateSelectedFields(); // Update the selectedFields array
      });

      operator.valueChanges.subscribe((selectedOperator: string) => {
        if (selectedOperator === '==' || selectedOperator === '!=') {
          value.enable();
          value.setValidators([Validators.required, this.validateOptionValue()]);
          min.disable();
          min.setValue('');
          max.disable();
          max.setValue('');
        } else if (selectedOperator === '>' || selectedOperator === '>=') {
          min.enable();
          min.setValidators([Validators.required, this.validateOptionValue()]);
          value.disable();
          value.setValue('');
          max.disable();
          max.setValue('');
        } else if (selectedOperator === '<' || selectedOperator === '<=') {
          max.enable();
          max.setValidators([Validators.required, this.validateOptionValue()]);
          value.disable();
          value.setValue('');
          min.disable();
          min.setValue('');
        } else if (selectedOperator === 'range') {
          min.enable();
          min.setValidators([Validators.required, this.validateOptionValue()]);
          max.enable();
          max.setValidators([Validators.required, this.validateOptionValue()]);
          value.disable();
          value.setValue('');
        }

        value.updateValueAndValidity();
        min.updateValueAndValidity();
        max.updateValueAndValidity();
      });

      // min.valueChanges.subscribe((minValue:any) => {
      //   if(operator.value == 'range'){
      //     max.setValue('');
      //     max.enable();
      //     const fieldValue = field.value || '';
      //     const filteredMaxOptions:any = this.data.dataFilter[fieldValue].filter((value: any) => value > minValue);
      //     this.maxOptions[
      //       this.filtersForm.controls.length - 1
      //     ] = max.valueChanges.pipe(
      //         startWith(''),
      //       map((value: any) => this._filterValue(value, filteredMaxOptions))
      //     );
      //   }
      // }
      // );
    }
  }
  RemovedFilter(index: number): void {
    this.filtersForm.removeAt(index);
  }
  getDisplayField(value: string): string {
    const option = this.fields.find(opt => opt.value === value);
    return option ? option.label : '';
  }
  Filter(){
    // this.submit = true;
    if(this.form.invalid){
      return message('Form is invalid.')
    }
    let dataValue: any = this.form.getRawValue().filters;
    dataValue = dataValue.map((filter: any) => Object.fromEntries(
      Object.entries(filter)
        .filter(([key, value]) => value !== undefined && value !== '')
        .map(([key, value]) => [key, String(value)])
    ));
    console.log(dataValue);
    this.dialogRef.close(dataValue);
  }
  Close(){
    this.dialogRef.close();
  }
  getText( texto:string):string {
    const regex = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/;
    if (regex.test(texto)) {
      const fecha = new Date(texto);
      const dia = fecha.getDate();
      const mes = fecha.getMonth() + 1;
      const año = fecha.getFullYear();
      return `${dia}/${mes}/${año}`;
    }
    return texto;
  }
}
