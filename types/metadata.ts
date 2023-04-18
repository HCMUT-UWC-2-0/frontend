interface IMCPsResponse {
  location: string;
  capacity: string;
}

interface IMCPStatusResponse {
  location: string;
  updatedAt: string;
  currentLevelFill: number;
}

interface IVehiclesResponse {
  makeBy: string;
  model: string;
  capacity: string;
  fuelConsumption: string;
}
