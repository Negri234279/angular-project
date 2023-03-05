import { Component } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { User, UserRoles } from 'src/app/models/User'
import { UserService } from 'src/app/services/user-service.service'
import { v4 as uuidv4 } from 'uuid'


@Component({
    selector: 'app-create-user',
    templateUrl: './create-user.component.html',
})
export class CreateUserComponent {
    newUser: FormGroup
    userRoles = UserRoles

    constructor(
        private frmBuilder: FormBuilder,
        private userService: UserService,
        private router: Router
    ) {
        this.newUser = this.frmBuilder.group({
            nick: nickValidation,
            fullname: fullnameValidation,
            role: roleValidation,
        })
    }

    onSubmit(event: Event) {
        event.preventDefault()

        const uuid = uuidv4()
        const user = new User(
            uuid,
            this.newUser.value.nick,
            this.newUser.value.fullname,
            true,
            this.newUser.value.role
        )

        this.userService.addUser(user).subscribe((user) => {
            this.router.navigate(['/'])
        })
    }
}

export const nickValidation = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[a-zá-úñ\s]{5,40}$/i),
])
export const fullnameValidation = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[a-zá-úñ\s]{5,40}$/i),
])
export const roleValidation = new FormControl('', [
    Validators.required,
])