import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { StudentsService } from './users.service';
import { Student } from './user.module' ;

@Controller('students')
export class StudentsController {
    constructor(private studentsService: StudentsService) {}
    @Post()
    createStudent(@Body() createdStudent:{firstname, lastname, email, password}): Student {
        return this.studentsService.createStudent(createdStudent.firstname, createdStudent.lastname, createdStudent.email, createdStudent.password) ;
    }

    @Get()
    getAllStudents(): Student[] {
        return this.studentsService.getAllStudents() ;
    }

    @Get('id')
    getStudentById(@Param('id') id: number): Student {
        return this.studentsService.getStudentById(id) ;
    }

    @Delete('id')
    deleteStudent(@Param('id') id: number): void {
        this.studentsService.deleteStudent(id) ;
    }
}
