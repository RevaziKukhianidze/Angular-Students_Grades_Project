import { Component, OnInit } from '@angular/core';
import { Homework } from './homework-score';
import { Student } from './student.model';

@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.css'],
})
export class HomeworkComponent implements OnInit {
  homeWorkName!: string;
  homeWorkperiod!: string;
  students: Student[] = [
    new Student('Revazi Kukhianidze'),
    new Student('Lasha Deisadze'),
    new Student('Nino Kikabidze'),
    new Student('Giorgi Oqruadze'),
    new Student('Lana Bulia'),
  ];

  constructor() {}

  ngOnInit(): void {
    this.students = JSON.parse(localStorage['students']);
  }

  getAllHomeWorkNames() {
    return this.students[0].homeworks.map((work) => work.homeWorkName);
  }

  onDataSubmit() {
    this.students.forEach((eachStudent) => {
      eachStudent.homeworks.push(
        new Homework(this.homeWorkName, this.homeWorkperiod)
      );
    });
    this.homeWorkName = '';
    this.homeWorkperiod = '';
    console.log(this.students);
  }

  saveGrades() {
    localStorage['students'] = JSON.stringify(this.students);

    this.students.sort((first: Student, second: Student) => {
      var firstSt = first.homeworks
        .map((work) => work.grade)
        .reduce((a, b) => a + b, 0);
      var secondSt = second.homeworks
        .map((work) => work.grade)
        .reduce((a, b) => a + b, 0);
      return secondSt - firstSt;
    });
  }
}
