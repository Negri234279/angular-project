import { Component, Input } from '@angular/core'
import { FormGroup } from '@angular/forms'

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
})
export class InputComponent {
    @Input() label!: string
    @Input() iType: string = 'text'
    @Input() name!: string
    @Input() form!: FormGroup

    get id() {
        return this.name
    }
}
