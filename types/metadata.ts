interface IMCPsResponse {
  location: string;
  capacity: string;
}

interface IMCPStatusResponse {
  mcpID: number;
  location: string;
  updatedAt: string;
  currentLevelFill: number;
}

interface IVehicleStatusResponse {
  vehicleID: number;
  vehicleName: string;
  capacity: string;
  status: string;
  currentFuel: number;
  updatedAt: number;
}

interface IVehiclesResponse {
  makeBy: string;
  model: string;
  capacity: string;
  fuelConsumption: string;
}

interface IRoutesResponse {
  startLocation: string;
  endLocation: string;
  distance: string;
  estimatedTime: string;
}
