import { fetchAllMetadata } from "@apis/metadata";
import { ToastTemplate } from "@configs/toast";
import create from "zustand";

interface IMCPsState {
  loading: boolean;
  mcps: IMCPsResponse[];
  fetchMCPs: (accessToken: string) => Promise<void>;
}

export const useMCPStore = create<IMCPsState>()((set) => ({
  loading: false,
  mcps: [],
  fetchMCPs: async (accessToken: string) => {
    try {
      const res = await fetchAllMetadata("mcps", accessToken);
      set({ loading: true });
      if (res.status !== 200) {
        ToastTemplate.unknown();
      } else if (res.status === 200) {
        const mcps = res.data as IMCPsResponse[];
        set({ mcps });
      }
    } catch (e) {
      ToastTemplate.unknown();
      set({ loading: false });
    }
    set({ loading: false });
  },
}));
