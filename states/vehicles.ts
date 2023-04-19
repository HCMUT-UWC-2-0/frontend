import { fetchAllMetadata, fetchAllStatusOfMetadata } from "@apis/metadata";
import { ToastTemplate } from "@configs/toast";
import { create } from "zustand";

interface IVehicleState {
  loading: boolean;
  loadingStatus: boolean;
  vehicles: IVehiclesResponse[];
  vehicleStatuses: IVehicleStatusResponse[];
  fetchVehicles: (accessToken: string) => Promise<void>;
  fetchVehicleStatus: (accessToken: string) => Promise<void>;
}

export const useVehicleStore = create<IVehicleState>()((set) => ({
  loading: false,
  loadingStatus: false,
  vehicles: [],
  vehicleStatuses: [],
  fetchVehicles: async (accessToken: string) => {
    try {
      const res = await fetchAllMetadata("vehicles", accessToken);
      set({ loading: true });
      if (res.status !== 200) {
        ToastTemplate.unknown();
      } else if (res.status === 200) {
        const vehicles = res.data as IVehiclesResponse[];
        set({ vehicles });
      }
    } catch (e) {
      ToastTemplate.unknown();
      set({ loading: false });
    }
    set({ loading: false });
  },
  fetchVehicleStatus: async (accessToken: string) => {
    try {
      const res = await fetchAllStatusOfMetadata("vehicles", accessToken);
      set({ loadingStatus: true });
      if (res.status !== 200) {
        ToastTemplate.unknown();
      } else if (res.status === 200) {
        const vehicleStatuses = res.data as IVehicleStatusResponse[];
        set({ vehicleStatuses });
      }
    } catch (e) {
      ToastTemplate.unknown();
      set({ loadingStatus: false });
    }
    set({ loadingStatus: false });
  },
}));
