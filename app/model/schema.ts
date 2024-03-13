import {appSchema, tableSchema} from '@nozbe/watermelondb/Schema';

export default appSchema({
  version: 50,
  tables: [
    tableSchema({
      name: 'employees',
      columns: [
        {name: 'employee_id', type: 'string'},
        {name: 'first_name', type: 'string'},
        {name: 'last_name', type: 'string'},
        {name: 'age', type: 'number'},
        {name: 'email', type: 'string'},
        {name: 'gender', type: 'string'},
        {name: 'job_title', type: 'string'},
        {name: 'salary', type: 'number'},
        {name: 'hire_date', type: 'string'},
        {name: 'department', type: 'string'},
      ],
    }),
    tableSchema({
      name: 'students',
      columns: [
        {name: 'student_id', type: 'string'},
        {name: 'first_name', type: 'string'},
        {name: 'last_name', type: 'string'},
        {name: 'age', type: 'number'},
        {name: 'email', type: 'string'},
        {name: 'major', type: 'string'},
        {name: 'gpa', type: 'number'},
        {name: 'enrollment_date', type: 'string'},
        {name: 'graduation_date', type: 'string'},
        {name: 'advisor', type: 'string'},
        {name: 'tuition_paid', type: 'number'},
        {name: 'class_rank', type: 'number'},
        {name: 'student_activities', type: 'string'},
        {name: 'library_books_checked_out', type: 'number'},
        {name: 'housing_status', type: 'string'},
      ],
    }),
    tableSchema({
      name: 'info',
      columns: [
        {name: 'first_name', type: 'string'},
        {name: 'last_name', type: 'string'},
        {name: 'age', type: 'number'},
        {name: 'email', type: 'string'},
        {name: 'gender', type: 'string'},
        {name: 'address', type: 'string'},
        {name: 'phone_number', type: 'number'},
        {name: 'birthdate', type: 'string'},
      ],
    }),
    tableSchema({
      name: 'media',
      columns: [
        {name: 'user_id', type: 'number'},
        {name: 'username', type: 'string'},
        {name: 'full_name', type: 'string'},
        {name: 'email', type: 'string'},
        {name: 'birthdate', type: 'string'},
        {name: 'location', type: 'string'},
        {name: 'bio', type: 'string'},
        {name: 'followers_count', type: 'number'},
        {name: 'following_count', type: 'number'},
        {name: 'profile_pic', type: 'string'},
        {name: 'post_count', type: 'number'},
        {name: 'last_post_date', type: 'string'},
        {name: 'is_verified', type: 'boolean'},
        {name: 'interests', type: 'string'},
        {name: 'account_creation_date', type: 'string'},
      ],
    }),
  ],
});
