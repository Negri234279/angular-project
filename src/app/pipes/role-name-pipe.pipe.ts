import { Pipe, PipeTransform } from '@angular/core'
import { UserRoles } from '../models/User'

// type RoleMap = Record<UserRoles, string>

interface RoleMap {
    [i: string]: string
}

@Pipe({
    name: 'roleNamePipe',
})
export class RoleNamePipePipe implements PipeTransform {
    private roleMap: RoleMap = {
        [UserRoles.Student]: 'student',
        [UserRoles.Teacher]: 'teacher',
        // [UserRoles.Other]: 'other',
    }

    transform(value: string): string {
        const normalizedValue = value.toLowerCase()
        return this.roleMap[normalizedValue] || 'other'
    }
}