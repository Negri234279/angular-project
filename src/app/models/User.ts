export enum UserRoles {
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
        public role: UserRoles | string
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

export enum SORT_OPTIONS {
    NICK = '1',
    FULLNAME = '2',
    ROLE = '3',
    ACTIVE = '4',
}
