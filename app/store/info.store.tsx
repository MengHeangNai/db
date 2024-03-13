import {Database} from '@nozbe/watermelondb';
import {IInfo} from '../screen/Info/interface/info.interface';
import {database} from '../services/watermelon';
import {Alert} from 'react-native';

export const addInfo = async (info: IInfo) => {
  const db = database.get('info');
  await database
    .write(async () => {
      await db.create((newInfo: any) => {
        newInfo.first_name = info.first_name;
        newInfo.last_name = info.last_name;
        newInfo.age = info.age;
        newInfo.email = info.email;
        newInfo.gender = info.gender;
        newInfo.address = info.address;
        newInfo.phone_number = info.phone_number;
        newInfo.birthdate = info.birthdate;
      });
    })
};

export const addEmployee = async (employee: any[]) => {
  const db = database.get('employees');
  await database
    .write(async () => {
      employee.forEach(async employee => {
        await db.create((newEmployee: any) => {
          newEmployee.employee_id = employee.employee_id;
          newEmployee.first_name = employee.first_name;
          newEmployee.last_name = employee.last_name;
          newEmployee.age = employee.age;
          newEmployee.email = employee.email;
          newEmployee.gender = employee.gender;
          newEmployee.job_title = employee.job_title;
          newEmployee.salary = employee.salary;
          newEmployee.hire_date = employee.hire_date;
          newEmployee.department = employee.department;
        });
      });
    })
    .then(() => {
      console.log('success');
      Alert.alert('Success', 'Employee added successfully');
    })
    .catch((err: any) => {
      console.log('err', err);
    });
};

export const addStudent = async (student: any[]) => {
  const db = database.get('students');
  await database
    .write(async () => {
      student.forEach(async student => {
        await db.create((newStudent: any) => {
          newStudent.student_id = student.student_id;
          newStudent.first_name = student.first_name;
          newStudent.last_name = student.last_name;
          newStudent.age = student.age;
          newStudent.email = student.email;
          newStudent.major = student.major;
          newStudent.gpa = student.gpa;
          newStudent.enrollment_date = student.enrollment_date;
          newStudent.graduation_date = student.graduation_date;
          newStudent.advisor = student.advisor;
          newStudent.tuition_paid = student.tuition_paid;
          newStudent.class_rank = student.class_rank;
          newStudent.student_activities = student.student_activities;
          newStudent.library_books_checked_out =
            student.library_books_checked_out;
          newStudent.housing_status = student.housing_status;
        });
      });
    })
    .then(() => {
      console.log('success');
      Alert.alert('Success', 'Student added successfully');
    })
    .catch((err: any) => {
      console.log('err', err);
    });
};

export const addMedia = async (media: any[]) => {
  const db = database.get('media');
  console.log('medai.slice(0,2)', media.slice(0,2))
  await database
    .write(async () => {
      media.forEach(async media => {
        await db.create((newMedia: any) => {
          newMedia.user_id = media.user_id;
          newMedia.username = media.username;
          newMedia.full_name = media.full_name;
          newMedia.email = media.email;
          newMedia.birthdate = media.birthdate;
          newMedia.location = media.location;
          newMedia.bio = media.bio;
          newMedia.followers_count = media.followers_count;
          newMedia.following_count = media.following_count;
          newMedia.profile_pic = media.profile_pic;
          newMedia.post_count = media.post_count;
          newMedia.last_post_date = media.last_post_date;
          newMedia.is_verified = media.is_verified;
          newMedia.interests = media.interests;
          newMedia.account_creation_date = media.account_creation_date;
        });
      });
    })
    .then(() => {
      console.log('success');
      Alert.alert('Success', 'Media added successfully');
    })
    .catch((err: any) => {
      console.log('err', err);
    });
}
