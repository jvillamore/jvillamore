import { AbstractControl } from '@angular/forms'
export class MyValidators {
    static isPriceValid(control: AbstractControl) {
        const value = control.value
        return value > 100 ? { price_invalid: true } : null
    }
}