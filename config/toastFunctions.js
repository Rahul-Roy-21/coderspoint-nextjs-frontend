import { toast } from "react-toastify";

const TOAST_PROPS = {
  position: "top-center",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
};

export const notifyError = (message) => {
  toast.error(message, TOAST_PROPS);
};

export const notifySuccess = (message) => {
  toast.success(message, TOAST_PROPS);
};

export const notifyWarning = (message) => {
  toast.warn(message, TOAST_PROPS);
};
