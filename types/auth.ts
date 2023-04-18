interface LoginCredentials {
  email: string;
  password: string;
}

interface LoginResponse {
  accessToken: string;
  name: string;
  dateOfBirth: string;
  email: string;
  phone: string;
  expiredAt: string;
}

interface IAccountInfo {
  name: string;
  dateOfBirth: string;
  email: string;
  phone: string;
}
