import { fetchAllWorkers } from "@apis/janitors";
import { ToastTemplate } from "@configs/toast";
import { create } from "zustand";

interface IJanitorState {
  loading: boolean;
  janitors: Worker[];
  fetchJanitors: (accessToken: string) => Promise<void>;
}

export const useJanitorStore = create<IJanitorState>()((set) => ({
  loading: false,
  janitors: [],
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
}));
