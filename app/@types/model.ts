import Model from '@nozbe/watermelondb/Model';

export interface ICategory extends Model {
  id: string;
  name?: string;
  sobrenome?: string;
  photo?: string;
}

export interface ICategories {
  categories: ICategory[];
}

export interface IUser extends Model{
  id: string;
  name?: string;
  photo?: string;
  email?: string;
  password?: string;
}

export interface IUsers {
  users: IUser[];
}