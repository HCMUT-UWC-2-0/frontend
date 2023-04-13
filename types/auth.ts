interface LoginCredentials {
  email: string;
  password: string;
}

interface BackOfficerInfo {
  id: string;
  name: string;
  gender: string;
  dateOfBirth: string;
}

interface LoginResponse {
  accessToken: string;
  info: BackOfficerInfo;
  createdAt: string;
  updatedAt: string;
}
