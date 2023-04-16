import { loginApi } from "@apis/auth";
import { ROUTER } from "@configs/router";
import { ToastTemplate } from "@configs/toast";
import { LOGIN_STATUS } from "@constants/auth";
import { NextRouter } from "next/router";
import create from "zustand";

interface IAccountState {
  loading: boolean;
  email: string;
  handleLogin: (
    email: string,
    pass: string,
    router: NextRouter
  ) => Promise<void>;
  accessToken: string;
  // handleLogout: () => Promise<void>;
}

const useAccountStore = create<IAccountState>((set) => ({
  loading: false,
  email: "",
  accessToken: "",
  handleLogin: async (email, password, router) => {
    try {
      const res = await loginApi({ email, password });
      set({ loading: true });
      if (res.status === LOGIN_STATUS.FAILED_CREDENTIAL) {
        ToastTemplate.loginFailedCredential();
      } else if (res.status === LOGIN_STATUS.OK) {
        console.log(res);
        router.push(ROUTER.app.url);
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
