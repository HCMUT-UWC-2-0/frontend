import { LOGIN_STATUS } from "@constants/auth";
import { API_URL } from "@env";
import { request } from "@utils/request";

const loginApi = async (
  credentials: LoginCredentials
): Promise<{ error?: string; data?: LoginResponse; status: string }> => {
  const url = `${API_URL}/auth/login`;
  const options: RequestOptions<LoginCredentials> = {
    method: "post",
    data: credentials,
  };

  const result = await request<LoginCredentials, LoginResponse>(url, options);
  try {
    if (result.status !== 200) {
      return Promise.reject({
        error: "Failed to login",
        status: LOGIN_STATUS.FAILED_CREDENTIAL,
      });
    }
    return Promise.resolve({
      data: result.data,
      status: LOGIN_STATUS.OK,
    });
  } catch (e) {
    return Promise.reject({
      error: "Not Found",
      status: LOGIN_STATUS.FIELD_ERROR,
    });
  }
};

export { loginApi };
