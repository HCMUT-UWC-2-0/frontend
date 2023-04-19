interface WorkersResponse {
  id: number;
  ssn: string;
  name: string;
  age: number;
  gender: string;
  date_of_birth: string;
  place_of_birth: string;
  worker_type: string;
  phone: string;
  create_at: string;
  update_at: string;
}

interface Worker {
  ssn: string;
  name: string;
  age: number;
  gender: string;
  dateOfBirth: string;
  placeOfBirth: string;
  workerType: string;
  phone: string;
}

interface WorkersStatusResponse {
  workerID: string;
  workerName: string;
  phone: string;
  gender: string;
  status: string;
}
