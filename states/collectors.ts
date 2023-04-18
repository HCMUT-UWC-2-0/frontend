import { fetchAllWorkers } from "@apis/janitors";
import { ToastTemplate } from "@configs/toast";
import { create } from "zustand";

interface ICollectorState {
  loading: boolean;
  collectors: Worker[];
  fetchCollectors: (accessToken: string) => Promise<void>;
}

export const useCollectorStore = create<ICollectorState>()((set) => ({
  loading: false,
  collectors: [],
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
}));
