import { API_URL } from "@env";
import { request } from "@utils/request";

const fetchAllWorkers = async (
  workerType: string,
  accessToken: string
): Promise<{ error?: string; data?: WorkersResponse[]; status: number }> => {
  const url = `${API_URL}/api/workers?type=${workerType}`;
  const options: RequestOptions<Record<string, never>> = {
    method: "get",
    headers: {
      Authorization: "Bearer" + " " + accessToken,
    },
  };

  const result = await request<Record<string, never>, WorkersResponse[]>(
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

export { fetchAllWorkers };
