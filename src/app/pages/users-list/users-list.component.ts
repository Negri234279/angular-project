import { Component, OnInit } from '@angular/core'
import { debounceTime, Subject } from 'rxjs'
import { Filters } from 'src/app/components/users-list-filters/users-list-filters.component'
import { SORT_OPTIONS, User } from 'src/app/models/User'
import { UserService } from 'src/app/services/user-service.service'

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
})
export class UsersListComponent implements OnInit {
    users: User[] = []
    isLoading = false
    currentPage = 1
    pageSize = 10
    totalPages!: number
    totalCount!: number
    showActiveOnly: boolean = false
    sortBy: SORT_OPTIONS = SORT_OPTIONS.NICK
    searchTerm = ''
    searchTextChanged = new Subject<string>()

    constructor(private userService: UserService) {}

    ngOnInit() {
        this.loadPage(this.currentPage)

        this.searchTextChanged
            .pipe(debounceTime(300))
            .subscribe((searchTerm: string) => {
                this.searchTerm = searchTerm
                this.loadPage(this.currentPage)
            })
    }

    loadPage(page: number) {
        this.isLoading = true

        this.userService
            .getUsersPage(
                page,
                this.pageSize,
                this.sortBy,
                this.showActiveOnly,
                this.searchTerm
            )
            .subscribe(({ users, totalCount }) => {
                this.users = users
                this.totalPages = Math.ceil(totalCount / this.pageSize)
                this.totalCount = totalCount
            })

        this.isLoading = false
    }

    updateFilters({ showActiveOnly, sortBy }: Filters): void {
        this.currentPage = 1
        this.showActiveOnly = showActiveOnly
        this.sortBy = sortBy
        this.loadPage(this.currentPage)
    }

    onSearchTextChanged(searchTerm: string): void {
        this.searchTextChanged.next(searchTerm)
    }

    onDelete(id: string) {
        this.userService.deleteUser(id).subscribe(() => {
            this.loadPage(this.currentPage)
        })
    }

    prevPage() {
        this.currentPage--
        this.loadPage(this.currentPage)
    }

    nextPage() {
        this.currentPage++
        this.loadPage(this.currentPage)
    }

    get firstIndex(): number {
        if (!this.users) return 0

        return (this.currentPage - 1) * this.pageSize + 1
    }

    get lastIndex(): number {
        if (!this.users) return 0

        const lastIndex = this.currentPage * this.pageSize
        return Math.min(lastIndex, this.totalCount)
    }
}
