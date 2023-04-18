import { loginApi } from "@apis/auth";
import { ROUTER } from "@configs/router";
import { ToastTemplate } from "@configs/toast";
import { LOGIN_STATUS } from "@constants/auth";
import { NextRouter } from "next/router";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface IAccountState {
  loading: boolean;
  accountInfo: IAccountInfo | null;
  accessToken: string;
  expiredAt: string;
  handleLogin: (
    email: string,
    pass: string,
    router: NextRouter
  ) => Promise<void>;
}

export const useAccountStore = create<IAccountState>()(
  devtools(
    persist(
      (set) => ({
        loading: false,
        accountInfo: null,
        accessToken: "",
        expiredAt: "",
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
              res.data?.accessToken &&
                res.data &&
                set({
                  accessToken: res.data?.accessToken,
                  accountInfo: {
                    name: res.data?.name,
                    dateOfBirth: res.data?.dateOfBirth,
                    email: res.data?.email,
                    phone: res.data?.phone,
                  },
                  expiredAt: res.data?.expiredAt,
                });
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
