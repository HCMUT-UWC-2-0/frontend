import { toast } from "react-toastify";

export const FALLBACK_ERROR_MSG = "An error occurred, please try again later";
export const ToastTemplate = {
  unknown: () => toast.error(FALLBACK_ERROR_MSG),

  // Authentication
  loginFailedField: (mess: string) => toast.warn(mess),
  loginFailedCredential: () => toast.warn("Please check your credentials!"),
  logoutSuccess: () => toast.success("Logout successfully!"),
  signUpSuccess: () =>
    toast.success("Signup successfully, now you can login with new account!"),
  signUpFailed: (mess: string) => toast.error(mess),
  signUpCheckbox: () =>
    toast.warning("Please accept out Terms and Conditions!"),
};
