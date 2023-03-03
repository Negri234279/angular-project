import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'roleNamePipe',
})
export class RoleNamePipePipe implements PipeTransform {
    transform(value: string): string {
        if (value.toLowerCase() === 'student') {
            return 'student'
        } else if (value.toLowerCase() === 'teacher') {
            return 'teacher'
        } else {
            return 'other'
        }
    }
}
