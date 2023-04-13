import { LOGIN_STATUS } from "@constants/auth";
import { request } from "@utils/request";

const loginApi = async (
  credentials: LoginCredentials
): Promise<{ error?: string; data?: LoginResponse; status: string }> => {
  const url = "http://localhost:8000/auth/login";
  const options: RequestOptions<LoginCredentials> = {
    method: "post",
    data: {
      email: credentials.email,
      password: credentials.password,
    },
  };

  const result = await request<LoginCredentials, LoginResponse>(url, options);
  try {
    return Promise.resolve({
      data: result.data,
      status: LOGIN_STATUS.OK,
    });
  } catch (e) {
    return Promise.reject({
      error: "Failed to login",
      status: LOGIN_STATUS.FAILED_CREDENTIAL,
    });
  }
};

export { loginApi };
