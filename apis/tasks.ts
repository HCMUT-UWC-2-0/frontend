import { API_URL } from "@env";
import { request } from "@utils/request";

const fetchAllCurrentTasksApi = async (
  accessToken: string
): Promise<{
  error?: string;
  data?: ICurrentTaskResponse[];
  status: number;
}> => {
  const url = `${API_URL}/api/tasks/current`;
  const options: RequestOptions<Record<string, never>> = {
    method: "get",
    headers: {
      Authorization: "Bearer" + " " + accessToken,
    },
  };

  const result = await request<Record<string, never>, ICurrentTaskResponse[]>(
    url,
    options
  );
  try {
    if (result.status !== 200) {
      return Promise.reject({
        error: "Failed to fetch worker",
        status: result.status,
      });
    }

    return Promise.resolve({
      data: result.data,
      status: result.status,
    });
  } catch (e) {
    return Promise.reject({
      error: "Not Found",
    });
  }
};

export { fetchAllCurrentTasksApi };
