import { fetchAllCurrentTasksApi } from "@apis/tasks";
import { ToastTemplate } from "@configs/toast";
import { create } from "zustand";

interface ICurrentTaskState {
  loading: boolean;
  tasks: ICurrentTaskResponse[];
  fetchAllCurrentTasks: (accessToken: string) => Promise<void>;
}

export const useCurrentTasksStore = create<ICurrentTaskState>()((set) => ({
  loading: false,
  tasks: [],
  fetchAllCurrentTasks: async (accessToken: string) => {
    try {
      const res = await fetchAllCurrentTasksApi(accessToken);
      set({ loading: true });
      if (res.status !== 200) {
        ToastTemplate.unknown();
      } else if (res.status === 200) {
        set({ tasks: res.data });
      }
    } catch (e) {
      ToastTemplate.unknown();
      set({ loading: false });
    }
    set({ loading: false });
  },
}));
