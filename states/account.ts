import { loginApi } from "@apis/auth";
import { ROUTER } from "@configs/router";
import { ToastTemplate } from "@configs/toast";
import { LOGIN_STATUS } from "@constants/auth";
import { NextRouter } from "next/router";
import create from "zustand";

interface IAccountState {
  loading: boolean;
  name: string;
  handleLogin: (
    email: string,
    pass: string,
    router: NextRouter
  ) => Promise<void>;
  accessToken?: string;
  // handleLogout: () => Promise<void>;
}

const useAccountStore = create<IAccountState>((set) => ({
  loading: false,
  name: "",
  handleLogin: async (email, password, router) => {
    const res = await loginApi({ email, password });
    try {
      set({ loading: true });
      if (res.status === LOGIN_STATUS.FAILED_CREDENTIAL) {
        ToastTemplate.loginFailedCredential();
      } else if (res.status === LOGIN_STATUS.OK) {
        const name = res?.data?.info.name;
        set({ name });
        router.push(ROUTER.index.url);
      }
    } catch (e) {
      ToastTemplate.unknown();
    }
    set({ loading: false });
  },
  // handleLogout: async () => {
  //   set({ loading: true });
  //   try {
  //     await logoutAPI();
  //     ToastTemplate.logoutSuccess();
  //     window.location.href = ROUTER.login.url;
  //   } catch (e) {
  //     ToastTemplate.unknown();
  //   }
  //   set({ loading: false });
  // },
}));

export { useAccountStore };
