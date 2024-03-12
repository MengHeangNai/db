import { Model } from "@nozbe/watermelondb";
import { field } from "@nozbe/watermelondb/decorators";

export default class Students extends Model {
    static table = 'students';
    @field('student_id') student_id: any;
    @field('first_name') first_name: any;
    @field('last_name') last_name: any;
    @field('age') age: any;
    @field('email') email: any;
    @field('major') major: any;
    @field('gpa') gpa: any;
    @field('enrollment_date') enrollment_date: any;
    @field('graduation_date') graduation_date: any;
    @field('advisor') advisor: any;
    @field('tuition_paid') tuition_paid: any;
    @field('class_rank') class_rank: any;
    @field('student_activities') student_activities: any;
    @field('library_books_checked_out') library_books_checked_out: any;
    @field('housing_status') housing_status: any;
}
