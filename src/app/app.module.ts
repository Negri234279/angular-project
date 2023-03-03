import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { UsersListComponent } from './pages/users-list/users-list.component'
import { PaginationComponent } from './components/pagination/pagination.component'
import { CreateUserComponent } from './pages/create-user/create-user.component'
import { UpdateUserComponent } from './pages/update-user/update-user.component';
import { CapitalizeFirstLetterPipePipe } from './pipes/capitalize-first-letter-pipe.pipe';
import { RoleNamePipePipe } from './pipes/role-name-pipe.pipe'

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        UsersListComponent,
        PaginationComponent,
        CreateUserComponent,
        UpdateUserComponent,
        CapitalizeFirstLetterPipePipe,
        RoleNamePipePipe,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
