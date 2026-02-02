import React from "react";

export type ToastStatus = "success" | "warning" | "error";

interface CustomToastProps {
  status: ToastStatus;
  text: string;
  hasIcon?: boolean;
}

const backgroundMap: Record<ToastStatus, string> = {
  success: "green",
  warning: "yellow",
  error: "red",
};

const iconMap: Record<ToastStatus, string> = {
  success: "✅",
  warning: "⚠️",
  error: "❌",
};

const CustomToast: React.FC<CustomToastProps> = ({
  status,
  text,
  hasIcon = true,
}) => {
  return (
    <div
      style={{
        background: backgroundMap[status],
        padding: "16px 24px",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        minWidth: "250px",
        fontFamily: "sans-serif",
      }}
    >
      {hasIcon && <span>{iconMap[status]}</span>}
      <span>{text}</span>
    </div>
  );
};

export default CustomToast;
