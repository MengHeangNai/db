import {
  schemaMigrations,
  addColumns,
} from '@nozbe/watermelondb/Schema/migrations';

export default schemaMigrations({
  migrations: [
    {
      toVersion: 40,
      steps: [
        addColumns({
          table: 'categories',
          columns: [
            { name: 'sobrenome', type: 'string' },
            { name: 'photo', type: 'string' }, // Ensure 'photo' column is added here
          ],
        }),
        addColumns({
          table: 'employees',
          columns: [
            { name: 'employee_id', type: 'string' },
            { name: 'first_name', type: 'string' },
            { name: 'last_name', type: 'string' },
            { name: 'age', type: 'number' },
            { name: 'email', type: 'string' },
            { name: 'gender', type: 'string' },
            { name: 'job_title', type: 'string' },
            { name: 'salary', type: 'number' },
            { name: 'hire_date', type: 'string' },
            { name: 'department', type: 'string' },
          ],
        }),
        addColumns({
          table : 'students',
          columns:[
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
            {name: 'housing_status', type: 'string'}
          ]
        }),
        addColumns({
          table: 'info',
          columns: [
            {name: 'first_name', type: 'string'},
            {name: 'last_name', type: 'string'},
            {name: 'age', type: 'number'},
            {name: 'email', type: 'string'},
            {name: 'gender', type: 'string'},
            {name: 'address', type: 'string'},
            {name: 'phone_number', type: 'number'},
            {name: 'birthdate', type: 'string'},
          ]
        })
      ],

    },
  ],
});
