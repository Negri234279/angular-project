import { Component, OnInit } from '@angular/core'
import { User } from 'src/app/models/User'
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

    constructor(private userService: UserService) {}

    ngOnInit() {
        this.loadPage(this.currentPage)
    }

    loadPage(page: number) {
        this.isLoading = true

        this.userService
            .getUsersPage(page, this.pageSize, this.showActiveOnly)
            .subscribe(({ users, totalCount }) => {
                this.users = users
                this.totalPages = Math.ceil(totalCount / this.pageSize)
                this.totalCount = totalCount
            })

        this.isLoading = false
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
