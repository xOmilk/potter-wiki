import toast from "react-hot-toast";
import { ToastHotInfo } from "./ToastHotInfo";

const isDark = () =>
	document.documentElement.getAttribute("data-theme") !== "claro";

export const toastHotAdapter = {
	error: (msg: string) =>
		toast.error(msg, {
			style: {
				background: isDark() ? "rgba(20, 10, 10, 0.95)" : "#fff5f5",
				color: isDark() ? "#e8e4d8" : "#2c1f0e",
				border: "1px solid rgba(220, 50, 50, 0.4)",
				borderRadius: "12px",
				padding: "12px 16px",
				fontSize: "15px",
				backdropFilter: "blur(12px)",
				boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
			},
		}),
	success: (msg: string) =>
		toast.success(msg, {
			style: {
				background: isDark() ? "rgba(8, 9, 26, 0.92)" : "#fffbf0",
				color: isDark() ? "#e8e4d8" : "#2c1f0e",
				border: "1px solid rgba(212, 175, 55, 0.35)",
				borderRadius: "12px",
				padding: "12px 16px",
				fontSize: "15px",
				backdropFilter: "blur(12px)",
				boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
			},
			iconTheme: {
				primary: "#d4af37",
				secondary: isDark() ? "#08091a" : "#fffbf0",
			},
			duration: 4000,
			id: "success-toast",
		}),
	info: (msg: string) =>
		toast.custom(<ToastHotInfo message={msg} />, {
			id: "custom-info-toast",
			duration: 4000,
		}),
};
