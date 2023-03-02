import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CreateUserComponent } from './pages/create-user/create-user.component'
import { UpdateUserComponent } from './pages/update-user/update-user.component'
import { UsersListComponent } from './pages/users-list/users-list.component'

const routes: Routes = [
    { path: '', component: UsersListComponent },
    { path: 'create-user', component: CreateUserComponent },
    { path: 'update-user/:id', component: UpdateUserComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
