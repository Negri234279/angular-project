import { Injectable } from '@angular/core'
import { HttpClient, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs'
import { User, UserPagination } from '../models/User'
import { map } from 'rxjs/operators'

@Injectable({
    providedIn: 'root',
})
export class UserService {
    private urlApi = 'http://localhost:3000/users'

    constructor(private http: HttpClient) {}

    // GET all users
    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.urlApi)
    }

    getUsersPage(page: number, pageSize: number): Observable<UserPagination> {
        const params = {
            _page: page.toString(),
            _limit: pageSize.toString(),
        }

        

        return this.http
            .get<User[]>(this.urlApi, { params, observe: 'response' })
            .pipe(
                map((res: HttpResponse<User[]>) => {
                    const totalCount = res.headers.get('X-Total-Count')

                    return {
                        users: res.body ?? [],
                        totalCount: Number(totalCount) ?? 0,
                    }
                })
            )
    }

    // GET user by ID
    getUser(id: string): Observable<User> {
        const url = `${this.urlApi}/${id}`
        return this.http.get<User>(url)
    }

    // CREATE user
    addUser(user: User): Observable<User> {
        return this.http.post<User>(this.urlApi, user)
    }

    // UPDATE user
    updateUser(user: User): Observable<User> {
        const url = `${this.urlApi}/${user.id}`
        return this.http.put<User>(url, user)
    }

    // DELETE user
    deleteUser(id: string): Observable<User> {
        const url = `${this.urlApi}/${id}`
        return this.http.delete<User>(url)
    }
}
