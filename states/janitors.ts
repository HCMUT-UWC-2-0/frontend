import { fetchAllWorkers, fetchAllWorkerStatus } from "@apis/janitors";
import { ToastTemplate } from "@configs/toast";
import { create } from "zustand";

interface IJanitorState {
  loading: boolean;
  loadingStatus: boolean;
  janitors: Worker[];
  janitorStatuses: WorkersStatusResponse[];
  fetchJanitors: (accessToken: string) => Promise<void>;
  fetchJanitorStatus: (accessToken: string) => Promise<void>;
}

export const useJanitorStore = create<IJanitorState>()((set) => ({
  loading: false,
  loadingStatus: false,
  janitors: [],
  janitorStatuses: [],
  fetchJanitors: async (accessToken: string) => {
    try {
      const res = await fetchAllWorkers("JANITOR", accessToken);
      set({ loading: true });
      if (res.status !== 200) {
        ToastTemplate.unknown();
      } else if (res.status === 200) {
        const janitors = res.data?.map((janitor) => ({
          ssn: janitor.ssn,
          name: janitor.name,
          age: janitor.age,
          gender: janitor.gender,
          dateOfBirth: janitor.date_of_birth,
          placeOfBirth: janitor.place_of_birth,
          phone: janitor.phone,
        })) as Worker[];
        set({ janitors });
      }
    } catch (e) {
      ToastTemplate.unknown();
      set({ loading: false });
    }
    set({ loading: false });
  },

  fetchJanitorStatus: async (accessToken: string) => {
    try {
      const res = await fetchAllWorkerStatus("JANITOR", accessToken);
      set({ loadingStatus: true });
      if (res.status !== 200) {
        ToastTemplate.unknown();
      } else if (res.status === 200) {
        const janitorStatuses = res.data;
        set({ janitorStatuses });
      }
    } catch (e) {
      ToastTemplate.unknown();
      set({ loadingStatus: false });
    }
    set({ loadingStatus: false });
  },
}));
