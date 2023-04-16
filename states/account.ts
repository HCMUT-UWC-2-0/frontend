import { loginApi } from "@apis/auth";
import { ROUTER } from "@configs/router";
import { ToastTemplate } from "@configs/toast";
import { LOGIN_STATUS } from "@constants/auth";
import { NextRouter } from "next/router";
import create from "zustand";
import { devtools, persist } from "zustand/middleware";

interface IAccountState {
  loading: boolean;
  email: string;
  handleLogin: (
    email: string,
    pass: string,
    router: NextRouter
  ) => Promise<void>;
  accessToken: string;
}

export const useAccountStore = create<IAccountState>()(
  devtools(
    persist(
      (set) => ({
        loading: false,
        accessToken: "",
        email: "",
        role: "",
        handleLogin: async (
          email: string,
          password: string,
          router: NextRouter
        ) => {
          try {
            const res = await loginApi({ email, password });
            set({ loading: true });
            if (res.status === LOGIN_STATUS.FAILED_CREDENTIAL) {
              ToastTemplate.loginFailedCredential();
            } else if (res.status === LOGIN_STATUS.OK) {
              set({ accessToken: res.data?.accessToken });
              router.push(ROUTER.app.url);
            }
          } catch (e) {
            ToastTemplate.unknown();
            set({ loading: false });
          }
          set({ loading: false });
        },
      }),
      {
        name: "auth-storage",
      }
    )
  )
);
