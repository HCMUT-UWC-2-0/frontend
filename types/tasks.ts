interface ICurrentTaskResponse {
  janitor: string;
  collector: string;
  vehicle: string;
  route: string;
  startTime: string;
  endTime: string;
  status: string;
}

interface ICreateTaskResponse {
  id: number;
  status: string;
}

interface ICreateTaskRequest {
  startTime: string;
  janitorId: number;
  collectorId: number;
  vehicleId: number;
  mcpId: number;
  routeId: number;
}
