export namespace Validation {

  const rutRegex = /^[0-9]{1,15}[-|‐][0-9kK]$/;

  const carLicensePlateFirstOptionRegex = /^[A-Za-z]{2}[0-9]{4}$/;
  const carLicensePlateSecondOptionRegex = /^[A-Za-z]{4}[0-9]{2}$/;

  const motorcycleLicensePlateFirstOptionRegex = /^[A-Za-z]{2}[0-9]{3}$/;
  const motorcycleLicensePlateSecondOptionRegex = /^[A-Za-z]{3}[0-9]{2}$/;

  const cellPhoneRegex = /^(0?9)(\s?)[9876543]\d{7}$/

  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  export class RutValidator {

    private static rutValidate(rut: any): Boolean {
      if (!rutRegex.test(rut)) {
        return false;
      }

      const rutParts: String[] = rut.split('-');
      const onlyRut: String = rutParts[0];
      const dv: String = rutParts[1];

      return (this.dvValidate(onlyRut) == dv.toLowerCase());
    }

    private static dvValidate(rut: any): String | Number {
      let M = 0, S = 1;
      for (; rut; rut = Math.floor(rut / 10)) {
        S = (S + rut % 10 * (9 - M++ % 6)) % 11;
      }
      return S ? S - 1 : 'k';
    }

    public static isValid(rut: any): Boolean {
      return this.rutValidate(rut);
    }

  }

  export class LicensePlateValidator  {

    public static isCarLicensePlate(licensePlate: string): Boolean {
      return carLicensePlateFirstOptionRegex.test(licensePlate) || carLicensePlateSecondOptionRegex.test(licensePlate);
    }

    public static isMotorcycleLicensePlate(licensePlate: string): Boolean {
      return motorcycleLicensePlateFirstOptionRegex.test(licensePlate) || motorcycleLicensePlateSecondOptionRegex.test(licensePlate);
    }

    public static isValid(licensePlate: string): Boolean {
      return this.isCarLicensePlate(licensePlate) || this.isMotorcycleLicensePlate(licensePlate);
    }
  }

  export class CellPhoneNumberValidator {
    static isValid(cellPhone: string) {
      return cellPhoneRegex.test(cellPhone);
    }
  }

  export class EmailValidator {
    static isValid(email: string) {
      return emailRegex.test(email);
    }
  }
}
