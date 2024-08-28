import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './entity/student.entity';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './dto/create-student.dto';
import { EnrollmentsService } from 'src/enrollments/enrollments.service';
import { SpecialtiesService } from 'src/specialties/specialties.service';
import { Specialty } from 'src/specialties/entity/specialty.entity';
import { _Module } from 'src/_modules/entity/module.entity';
import { ModulesService } from 'src/_modules/_modules.service';
import { ProgressService } from 'src/progress/progress.service';
import { Progress } from '../progress/entity/progress.entity';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
    private readonly enrollmentsService: EnrollmentsService,
    private readonly specialtiesService: SpecialtiesService,
    private readonly progressService: ProgressService,
  ) {}

  async createStudent(studentDTO: CreateStudentDto): Promise<Student> {
    try {
      const student = this.studentRepository.create() ;

      student.email = studentDTO.email ;
      student.firstName = studentDTO.first_name ;
      student.lastName = studentDTO.last_name ;
      student.password = studentDTO.password ;
      student.subscriber = studentDTO.subscriber ;

      const specialty = await this.specialtiesService.getSpecialtyByName(studentDTO.specialty) ;

      if(!specialty) {
        throw new Error(`${studentDTO.specialty} not found`) ;
      }

      const savedStudent = await this.studentRepository.save(student) ;

      await this.enrollmentsService.enrollStudent(savedStudent.id, specialty.id) ;
      
      return savedStudent ;
    } catch(error) {
      throw new Error(error.message) ;
    }
  }

  async findAll(): Promise<Student[]> {
    return await this.studentRepository.find();
  }

  getStudentById(id: number): Promise<Student> {
    return this.studentRepository.findOneBy({ id });
  }

  async subscribe(id: number): Promise<void> {
    try {
      const student: Student = await this.getStudentById(id);

      if (!student) {
        throw new Error(`student with ${id} not found`);
      }

      student.subscriber = true;
      this.studentRepository.save(student);
    } catch (error) {
      throw new Error(error);
    }
  }

  async unsubscribe(id: number): Promise<void> {
    try {
      const student: Student = await this.getStudentById(id);

      if (!student) {
        throw new Error(`student with ID: ${id} not found`);
      }

      student.subscriber = false;
      this.studentRepository.save(student);
    } catch (error) {
      console.error(error.message);
    }
  }

  async getScore(id: number): Promise<number> {
    try {
      const student = await this.getStudentById(id);
      return student.score;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async addScore(id: number, score: number): Promise<void> {
    try {
      const student: Student = await this.getStudentById(id);

      if (!student) {
        throw new Error(`student with ${id} isnt found`);
      }

      student.score += score;

      await this.studentRepository.save(student);
    } catch (error) {
      console.error(error);
      throw new Error('failed to add score');
    }
  }

  async getSpecialty(student_id: number): Promise<Specialty> {
    try {
      const student = await this.getStudentById(student_id) ;

      if(!student) {
        throw new Error(`student with ID: ${student_id} not found`) ;
      }

      const specialty = await this.enrollmentsService.getSpecialty(student_id) ;

      return await this.specialtiesService.getSpecialtyById(specialty.id) ;
    } catch(error) {
      throw new Error(error.message) ;
    }
  }

  async getProgress(student_id: number): Promise<number> {
    try {
      const student: Student = await this.getStudentById(student_id) ;
      if(!student) {
        throw new Error(`student with ID: ${student_id} not found`) ;
      }
      
      let overall: number = 0 ;

      for(let progress of student.progress) {
        overall += progress.progress ;
      }

      return 
    } catch(error) {
      throw new Error(error.message) ;
    }
  }

  async getModuleProgress(student_id: number, module_id: number): Promise<number> {
    try {
      const student: Student = await this.getStudentById(student_id) ;

      if(!student) {
        throw new Error(`student with ID: ${student_id} not found`) ;
      }

      const specialty: Specialty | null = await this.enrollmentsService.getSpecialty(student_id) ;
      if(!specialty) {
        throw new Error(`specialty with student_ID: ${student_id} not found`) ;
      }

      const modules: _Module[] = await specialty.modules ; 

      const _module: _Module = await modules.find(m => m.id === module_id) ;
      
      const progress: Progress = await this.progressService.getProgress(student.id, _module.id) ;
      return progress.progress ;

      
    } catch(error) {
      throw new Error(error.message) ;
    }
  }
}
