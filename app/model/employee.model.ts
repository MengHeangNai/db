import { Model } from "@nozbe/watermelondb";
import { field } from "@nozbe/watermelondb/decorators";

export class Employee extends Model {
  static table = 'employees';
    @field('employee_id') employee_id: any;
    @field('first_name') first_name: any;
    @field('last_name') last_name: any;
    @field('age') age: any;
    @field('email') email: any;
    @field('gender') gender : any;
    @field('job_title') job_title: any;
    @field('salary') salary: any;
    @field('hire_date') hire_date: any;
    @field('department') department: any;
}