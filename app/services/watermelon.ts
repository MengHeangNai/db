import {Database} from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import schema from '../model/schema';
import migrations from '../model/migrations';

import Categories from '../model/categories';
import { Employee } from '../model/employee.model';
import Students from '../model/student';
import InfoDB from '../model/infe.model';
import MediaDB from '../model/media.model';

const adapter = new SQLiteAdapter({
  schema,
  migrations,
  dbName: 'Heang',
});

export const database = new Database({
  adapter,
  modelClasses: [Employee,Students , InfoDB,MediaDB],
});
