import { Component, EventEmitter, Input, Output } from '@angular/core'

export type Filters = {
    showActiveOnly: boolean
    sortBy: string
}

@Component({
    selector: 'app-users-list-filters',
    templateUrl: './users-list-filters.component.html',
})
export class UsersListFiltersComponent {
    showActiveOnly = false
    sortBy = 'nick'

    @Output() filtersChanged = new EventEmitter<Filters>()

    onFiltersChanged() {
        this.filtersChanged.emit({
            showActiveOnly: this.showActiveOnly,
            sortBy: this.sortBy,
        })
    }
}
