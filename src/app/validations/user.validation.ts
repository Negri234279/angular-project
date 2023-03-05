import { FormControl, Validators } from '@angular/forms'

export const nickValidation = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[a-zá-úñ\s]{5,40}$/i),
])

export const fullnameValidation = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[a-zá-úñ\s]{5,40}$/i),
])

export const roleValidation = new FormControl('', [Validators.required])

export const activeValidation = new FormControl(false, [Validators.required])
