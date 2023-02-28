enum UserRole {
    Student = 'student',
    Teacher = 'teacher',
    Other = 'other',
}

export class User {
    constructor(
        public id: string,
        public nick: string,
        public fullname: string,
        public active: boolean,
        public role: string
    ) {}
}

export interface IUser {
    id: string
    nick: string
    fullname: string
    active: boolean
    role: string
}

export interface UserPagination {
    users: User[]
    totalCount: number
}
