import { Component, OnInit, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: 'app-update-user',
    templateUrl: './update-user.component.html',
})
export class UpdateUserComponent implements OnInit, OnDestroy {
    public id!: string
    private sub: any

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.sub = this.route.params.subscribe((params) => {
            this.id = params['id']

            // In a real app: dispatch action to load the details here.
        })
    }

    ngOnDestroy() {
        this.sub.unsubscribe()
    }
}
