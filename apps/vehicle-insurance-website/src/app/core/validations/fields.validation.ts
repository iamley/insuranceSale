import { AbstractControl } from "@angular/forms";
import { Validation } from "./validation";

export const licensePlateValidator = () => (control: AbstractControl): { [key: string]: any } | null => {
  return !Validation.LicensePlateValidator.isValid(control.value) ?
    { licensePlate: {value: control.value} } : null;
};

export const rutValidator = () => (control: AbstractControl): { [key: string]: any } | null => {
  return !Validation.RutValidator.isValid(control.value) ?
    { rut: {value: control.value} } : null;
}

export const cellPhoneValidator = () => (control: AbstractControl): { [key: string]: any } | null => {
  return !Validation.CellPhoneNumberValidator.isValid(control.value) ?
    { cellPhone: {value: control.value} } : null;
}

export const emailValidator = () => (control: AbstractControl): { [key: string]: any } | null => {
  return !Validation.EmailValidator.isValid(control.value) ?
    { email: {value: control.value} } : null;
}

export const confirmEmailValidator = (email) => (control: AbstractControl): { [key: string]: any } | null => {
  return control.value === email ? { repeat_email: {value: control.value} } : null;
}
