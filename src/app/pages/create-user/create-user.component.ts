import { Component, OnDestroy } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { User, UserRoles } from 'src/app/models/User'
import { UserService } from 'src/app/services/user-service.service'
import {
    fullnameValidation,
    nickValidation,
    roleValidation,
} from 'src/app/validations/user.validation'
import { v4 as uuidv4 } from 'uuid'

@Component({
    selector: 'app-create-user',
    templateUrl: './create-user.component.html',
})
export class CreateUserComponent implements OnDestroy {
    form: FormGroup
    userRoles = UserRoles

    constructor(
        private frmBuilder: FormBuilder,
        private userService: UserService,
        private router: Router
    ) {
        this.form = this.frmBuilder.group({
            nick: nickValidation,
            fullname: fullnameValidation,
            role: roleValidation,
        })
    }

    onSubmit(ev: Event) {
        ev.preventDefault()

        const uuid = uuidv4()
        const user = new User(
            uuid,
            this.form.value.nick,
            this.form.value.fullname,
            true,
            this.form.value.role
        )

        this.userService.addUser(user).subscribe(() => {
            this.router.navigate(['/'])
        })
    }

    cancel() {
        this.router.navigate(['/'])
    }

    ngOnDestroy() {
        this.form.reset()
    }
}
