import { API_URL } from "@env";
import { request } from "@utils/request";

const fetchAllMetadata = async (
  dataType: string,
  accessToken: string
): Promise<{
  error?: string;
  data?: IMCPsResponse[] | IVehiclesResponse[] | IRoutesResponse[];
  status: number;
}> => {
  const url = `${API_URL}/api/${dataType}`;
  const options: RequestOptions<Record<string, never>> = {
    method: "get",
    headers: {
      Authorization: "Bearer" + " " + accessToken,
    },
  };

  const result = await request<
    Record<string, never>,
    IMCPsResponse[] | IVehiclesResponse[]
  >(url, options);
  try {
    if (result.status !== 200) {
      return Promise.reject({
        error: "Failed to fetch data",
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

const fetchAllStatusOfMetadata = async (
  dataType: string,
  accessToken: string
): Promise<{
  error?: string;
  data?: IMCPStatusResponse[] | IVehicleStatusResponse[];
  status: number;
}> => {
  const url = `${API_URL}/api/${dataType}/status`;
  const options: RequestOptions<Record<string, never>> = {
    method: "get",
    headers: {
      Authorization: "Bearer" + " " + accessToken,
    },
  };

  const result = await request<
    Record<string, never>,
    IMCPStatusResponse[] | IVehicleStatusResponse[]
  >(url, options);
  try {
    if (result.status !== 200) {
      return Promise.reject({
        error: "Failed to fetch data",
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

export { fetchAllMetadata, fetchAllStatusOfMetadata };
