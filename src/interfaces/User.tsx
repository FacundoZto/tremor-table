export interface User {
  id: string,
  name?: {
    title: string;
    first: string;
    last: string;
  },
  gender?: string;
  email?: string;
  location?: {
    city: string;
    state: string;
    country: string;
  },
  picture?: {
    medium: string;
    thumbnail: string;
  }
};