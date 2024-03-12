import {appSchema, tableSchema} from '@nozbe/watermelondb/Schema';

export default appSchema({
  version: 39,
  tables: [
    tableSchema({
      name: 'categories',
      columns: [
        {name: 'name', type: 'string'},
        {name: 'sobrenome', type: 'string'},
        {name: 'photo', type: 'string'},
      ],
    }),
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
  ],
});
