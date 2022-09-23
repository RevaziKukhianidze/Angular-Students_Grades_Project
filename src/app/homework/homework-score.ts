export class Homework {
  public homeWorkName!: string;
  public grade!: number;
  public period!: Date;

  constructor(name: string, period: string) {
    this.homeWorkName = name;
    this.period = new Date(period);
    this.grade = 0;
  }
}
