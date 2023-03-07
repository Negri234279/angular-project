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
import { RoleNamePipePipe } from './pipes/role-name-pipe.pipe';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { InputComponent } from './components/input/input.component';
import { SelectComponent } from './components/select/select.component';
import { UsersListFiltersComponent } from './components/users-list-filters/users-list-filters.component'

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
        UsersTableComponent,
        InputComponent,
        SelectComponent,
        UsersListFiltersComponent,
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
