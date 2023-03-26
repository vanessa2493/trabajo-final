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
  posts: PostType[];
  uid: string;
};

export type UserAuth = {
  uid: string;
  displayName: string | null;
  email: string | null;
  emailVerified: boolean;
  photoURL: string | null;
  isAnonymous: boolean;
  providerData: Array<{
    uid: string;
    displayName: string | null;
    email: string | null;
    photoURL: string | null;
    providerId: string;
  }>;
  getIdToken: (forceRefresh?: boolean) => Promise<string>;
  getIdTokenResult: (forceRefresh?: boolean) => Promise<{
    token: string;
    expirationTime: string;
    authTime: string;
    issuedAtTime: string;
    signInProvider: string | null;
    claims: { [key: string]: any };
  }>;
};


export type SignupType = Omit<User, 'sessionToken' | 'state' | 'posts'>;

export type CommentsType = {
  id: string;
  user_id: Pick<User, 'id'>
  comment: string;
}

export type MovieType = {
  adult: boolean,
  backdrop_path: null,
  genre_ids: [
    number
  ],
  id: string,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: Date,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number
}

export type PostType = {
  movieId?: string,
  comments?: string[],
  date: string,
}



