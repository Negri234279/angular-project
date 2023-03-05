import { Component, OnInit, OnDestroy } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { Subscription } from 'rxjs'
import { User, UserRoles } from 'src/app/models/User'
import { UserService } from 'src/app/services/user-service.service'
import {
    activeValidation,
    fullnameValidation,
    nickValidation,
    roleValidation,
} from 'src/app/validations/user.validation'

@Component({
    selector: 'app-update-user',
    templateUrl: './update-user.component.html',
})
export class UpdateUserComponent implements OnInit, OnDestroy {
    public id!: string
    public user!: User
    public isLoading = false
    public form: FormGroup
    private sub!: Subscription
    public roles: string[] = Object.values(UserRoles)
    public role: string = ''

    constructor(
        private userService: UserService,
        private route: ActivatedRoute,
        private router: Router,
        private formBuilder: FormBuilder
    ) {
        this.form = this.formBuilder.group({
            nick: nickValidation,
            fullname: fullnameValidation,
            active: activeValidation,
            role: roleValidation,
        })
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe((params) => {
            const id = params['id']
            this.getUser(id)
        })
    }

    ngOnDestroy() {
        this.sub.unsubscribe()
    }

    getUser(id: string) {
        this.isLoading = true
        this.userService.getUser(id).subscribe((user) => {
            this.user = user
            this.role = user.role
            this.form.patchValue(user)
            this.isLoading = false
        })
    }

    submitForm() {
        const updatedUser = { ...this.user, ...this.form.value }
        this.userService.updateUser(updatedUser).subscribe(() => {
            this.router.navigate(['/'])
        })
    }

    cancel() {
        this.router.navigate(['/'])
    }
}
