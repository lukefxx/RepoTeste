//Add esses imports
import { Component, OnInit } from '@angular/core';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { SharedService } from 'src/app/shared/shared.service';
import { TeacherService } from '../teacher.service';
@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.scss']
})
export class TeacherListComponent implements OnInit {
  faPencil = faPencil;
  faTrash = faTrash;

  courseLabel: Array<{ value: string, label: string }> = [];
  teachers: any[] = [];

  constructor(
    private teacherService: TeacherService, 
    private sharedService: SharedService
    ) { }

  async ngOnInit(): Promise<void> {
    this.courseLabel = await this.sharedService.convertCourseToOption();
  }

  getLabelCourse(value: string): string | undefined {
    let course = this.courseLabel.find((course) => course.value == value)
    return course?.label;
  }
}
