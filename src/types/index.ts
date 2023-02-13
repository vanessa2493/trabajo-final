export type User = {
  nickname: string;
  birthdate: Date;
  city: string;
  country: string;
  email: string;
  friends: string[];
  id: string;
  lastname: string;
  name: string;
  password: string;
  sessionToken?: string;
  state: string;
};

export type SignupType = Omit<User, 'id'>

export type CommentsType = {
  id: string;
  user_id: Pick<User, 'id'>
  comment: string;
}
