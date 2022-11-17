export enum Profession {
  Student = 'Student',
  Employed = 'Employed',
}

export interface IFormInput {
  name: string;
  age: number;
  date: string;
  profession: Profession;
  locality: string;
  guests: number;
  address: string;
}

export interface IParticipant {
  id: number;
  name: string;
  age: number;
  date_of_birth: string;
  profession: string;
  locality: string;
  number_of_guest: number;
  address: string;
}