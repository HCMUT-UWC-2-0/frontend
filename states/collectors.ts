import { fetchAllWorkers, fetchAllWorkerStatus } from "@apis/janitors";
import { ToastTemplate } from "@configs/toast";
import { create } from "zustand";

interface ICollectorState {
  loading: boolean;
  loadingStatus: boolean;
  collectors: Worker[];
  collectorStatuses: WorkersStatusResponse[];
  fetchCollectors: (accessToken: string) => Promise<void>;
  fetchCollectorStatuses: (accessToken: string) => Promise<void>;
}

export const useCollectorStore = create<ICollectorState>()((set) => ({
  loading: false,
  loadingStatus: false,
  collectors: [],
  collectorStatuses: [],
  fetchCollectors: async (accessToken: string) => {
    try {
      const res = await fetchAllWorkers("COLLECTOR", accessToken);
      set({ loading: true });
      if (res.status !== 200) {
        ToastTemplate.unknown();
      } else if (res.status === 200) {
        const collectors = res.data?.map((collector) => ({
          ssn: collector.ssn,
          name: collector.name,
          age: collector.age,
          gender: collector.gender,
          dateOfBirth: collector.date_of_birth,
          placeOfBirth: collector.place_of_birth,
          phone: collector.phone,
        })) as Worker[];
        set({ collectors });
      }
    } catch (e) {
      ToastTemplate.unknown();
      set({ loading: false });
    }
    set({ loading: false });
  },

  fetchCollectorStatuses: async (accessToken: string) => {
    try {
      const res = await fetchAllWorkerStatus("COLLECTOR", accessToken);
      set({ loadingStatus: true });
      if (res.status !== 200) {
        ToastTemplate.unknown();
      } else if (res.status === 200) {
        const collectorStatuses = res.data;
        set({ collectorStatuses });
      }
    } catch (e) {
      ToastTemplate.unknown();
      set({ loadingStatus: false });
    }
    set({ loadingStatus: false });
  },
}));
