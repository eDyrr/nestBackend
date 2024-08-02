import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';

@Controller('students')
export class StudentsController {
    constructor(private readonly studentsService: StudentsService) {}
    
    @Post()
    createStudent(@Body() studentDTO: CreateStudentDto) {
        return this.studentsService.createStudent(studentDTO) ;
    }

    @Get()
    getAllStudents() {
        return this.studentsService.findAll() ;
    }

    @Get(':id')
    getStudentById(@Param('id') id: number) {
        return this.studentsService.findById(id) ;
    }

    @Get(':id')
    getStudentScore(@Param('id') id: number) {
        return this.studentsService.getScore(id) ;
    }

    @Get(':id')
    getStudentSpecialty(@Param('id') id: number) {
        return this.studentsService.getSpecialty(id) ;
    }
}
