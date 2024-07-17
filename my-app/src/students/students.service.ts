import { Injectable } from '@nestjs/common';
import { Student } from './student.module' ;

@Injectable()
export class StudentsService {
    private students: Student[] = [] ;

    getAllStudents(): Student[] {
        return this.students ;
    }

    getStudentById(id: number): Student {
        return this.students.find((student) => student.id === id) ;
    }

    deleteStudent(id: number): void {
        const student = this.getStudentById(id) ;
        if(student) {
            this.students = this.students.filter((student) => student.id !== id) ;
        }
    }

    createStudent(firstName: string, lastName: string, email: string, password: string): Student {
        const id = this.students.length + 1 ;
        const student: Student = {
            id,
            firstName,
            lastName,
            email,
            password,
            score: 0,
        } ;

        this.students.push(student) ;

        return student ;
    }
}
