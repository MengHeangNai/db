export type IInfo = {
  first_name?: String,
  last_name?: String,
  age?: Number,
  email?: String,
  gender?: String,
  address?: String,
  phone_number?: String,
  birthdate?: String,
};

export type TInfoError = {
  [Key in keyof IInfo]: string
}
