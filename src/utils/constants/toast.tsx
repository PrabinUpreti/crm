import { toast, ToastContainerProps } from "react-toastify";
import { ToastProps } from "react-toastify/dist/types";

const commonToast: ToastContainerProps & { progress: ToastProps["progress"] } =
  {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };

export const getSuccessToast = (
  msg: string,
  theme?: "light" | "dark" | "system"
) =>
  toast.success(msg, {
    ...commonToast,
    theme: theme === "dark" ? "dark" : "light",
  });

export const getErrorToast = (
  msg: string,
  theme?: "light" | "dark" | "system"
) =>
  toast.error(msg, {
    ...commonToast,
    theme: theme === "dark" ? "dark" : "light",
  });

export const getWarningToast = (
  msg: string,
  theme?: "light" | "dark" | "system"
) =>
  toast.warning(msg, {
    ...commonToast,
    theme: theme === "dark" ? "dark" : "light",
  });

export const getInfoToast = (
  msg: string,
  theme?: "light" | "dark" | "system"
) =>
  toast.info(msg, {
    ...commonToast,
    theme: theme === "dark" ? "dark" : "light",
  });

export const getDefaultToast = (msg: string) => toast(msg, { ...commonToast });
