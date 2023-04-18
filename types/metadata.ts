interface IMCPsResponse {
  location: string;
  capacity: string;
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
