import { toast } from "react-toastify";

export const showToast = (msg) => {
  toast.success(msg, {
    position: toast.POSITION.TOP_RIGHT,
  });
};

export const showErrorToast = (msg) => {
  toast.error(err, {
    position: toast.POSITION.TOP_RIGHT,
  });
};
