import { Component, EventEmitter, Output } from '@angular/core'
import { SORT_OPTIONS } from 'src/app/models/User'

export type Filters = {
    showActiveOnly: boolean
    sortBy: SORT_OPTIONS
}

@Component({
    selector: 'app-users-list-filters',
    templateUrl: './users-list-filters.component.html',
})
export class UsersListFiltersComponent {
    public showActiveOnly: boolean = false
    public sortBy: SORT_OPTIONS = SORT_OPTIONS.NICK
    public searchTerm: string = ''
    public SORT_OPTIONS: typeof SORT_OPTIONS = SORT_OPTIONS

    @Output() filtersChanged = new EventEmitter<Filters>()
    @Output() searchTextChanged = new EventEmitter<string>()

    onFiltersChanged(): void {
        if (this.showActiveOnly && this.sortBy === SORT_OPTIONS.ACTIVE) {
            this.sortBy = SORT_OPTIONS.NICK
        }

        this.filtersChanged.emit({
            showActiveOnly: this.showActiveOnly,
            sortBy: this.sortBy,
        })
    }

    onSearchTextChanged(): void {
        this.searchTextChanged.emit(this.searchTerm)
    }
}
