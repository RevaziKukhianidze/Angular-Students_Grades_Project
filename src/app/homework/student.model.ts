import { Homework } from './homework-score';

export class Student {
  public fullName!: string;
  public homeworks: Homework[];

  constructor(fullName: string) {
    this.fullName = fullName;
    this.homeworks = [];
  }
}
