import { fetchAllMetadata } from "@apis/metadata";
import { ToastTemplate } from "@configs/toast";
import { create } from "zustand";

interface IRouteState {
  loading: boolean;
  routes: IRoutesResponse[];
  fetchRoutes: (accessToken: string) => Promise<void>;
}

export const useRouteStore = create<IRouteState>()((set) => ({
  loading: false,
  routes: [],
  fetchRoutes: async (accessToken: string) => {
    try {
      const res = await fetchAllMetadata("routes", accessToken);
      set({ loading: true });
      if (res.status !== 200) {
        ToastTemplate.unknown();
      } else if (res.status === 200) {
        const routes = res.data as IRoutesResponse[];
        set({ routes });
      }
    } catch (e) {
      ToastTemplate.unknown();
      set({ loading: false });
    }
    set({ loading: false });
  },
}));
