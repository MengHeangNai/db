export type IInfo = {
  first_name?: any,
  last_name?: any,
  age?: any,
  email?: any,
  gender?: any,
  address?: any,
  phone_number?: any,
  birthdate?: any,
};

export type TInfoError = {
  [Key in keyof IInfo]: string
}
