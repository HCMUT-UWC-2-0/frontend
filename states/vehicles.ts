import { fetchAllMetadata } from "@apis/metadata";
import { ToastTemplate } from "@configs/toast";
import { create } from "zustand";

interface IVehicleState {
  loading: boolean;
  vehicles: IVehiclesResponse[];
  fetchVehicles: (accessToken: string) => Promise<void>;
}

export const useVehicleStore = create<IVehicleState>()((set) => ({
  loading: false,
  vehicles: [],
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
}));
