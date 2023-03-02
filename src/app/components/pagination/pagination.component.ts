import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
})
export class PaginationComponent {
    @Input() firstIndex!: number
    @Input() lastIndex!: number
    @Input() totalCount!: number
    @Input() currentPage!: number
    @Input() totalPages!: number

    @Output() prevPage = new EventEmitter<void>()
    @Output() nextPage = new EventEmitter<void>()
}
