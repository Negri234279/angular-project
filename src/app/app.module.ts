import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NavbarComponent } from './navbar/navbar.component'
import { UsersListComponent } from './pages/users-list/users-list.component';
import { PaginationComponent } from './components/pagination/pagination.component'

@NgModule({
    declarations: [AppComponent, NavbarComponent, UsersListComponent, PaginationComponent],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
