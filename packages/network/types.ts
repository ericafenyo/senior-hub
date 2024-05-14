export type Tokens = {
  accessToken: string;
};

export type Address = {
  id: string;
  postalCode: string;
  street: string;
  city: string;
  country: string;
};

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  email: string;
  photoUrl: string;
  role: string;
  address: Address;
  createdAt: string;
  updatedAt: string;
};

export class HttpException extends Error {
  status?: number;
  code?: string;
}

export type Session = {
  token: string;
};
