import { Component } from '@angular/core'

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
})
export class NavbarComponent {
    public routes = [
        { label: 'Home', path: '/' },
        { label: 'Create', path: '/create-user' },
    ]
}
