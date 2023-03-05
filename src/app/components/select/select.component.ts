import { Component, Input, OnInit } from '@angular/core'
import { FormGroup } from '@angular/forms'

@Component({
    selector: 'app-select',
    templateUrl: './select.component.html',
})
export class SelectComponent implements OnInit {
    public selectOptions: Options = []

    @Input() label!: string
    @Input() name!: string
    @Input() options: object | Options = []
    @Input() form!: FormGroup
    @Input() requiredErrorMessage: string = 'Required field'

    get id() {
        return this.name
    }

    ngOnInit(): void {
        if (typeof this.options === 'object') {
            this.selectOptions = Object.values(this.options).map((value) => ({
                value,
                label: value,
            }))
        } else {
            this.selectOptions = this.options
        }
    }
}

type Options = Array<{
    value: string
    label: string
}>

/*export class SelectComponent implements OnInit {
    public selectOptions: Options = []

    @Input() label!: string
    @Input() name!: string
    @Input() formControlName!: string
    @Input() options: object | Options = []
    @Input() form!: FormGroup
    @Input() requiredErrorMessage: string = 'Required field'

    get id() {
        return this.name
    }

    ngOnInit(): void {
        if (typeof this.options === 'object') {
            this.selectOptions = Object.values(this.options)
        } else {
            this.selectOptions = this.options
        }
    }
}*/
