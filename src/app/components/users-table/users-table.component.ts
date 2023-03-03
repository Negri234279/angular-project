import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/models/User'

@Component({
    selector: 'app-users-table',
    templateUrl: './users-table.component.html',
})
export class UsersTableComponent {
    @Input() users!: User[]

    @Output() onDelete = new EventEmitter<string>()
}
