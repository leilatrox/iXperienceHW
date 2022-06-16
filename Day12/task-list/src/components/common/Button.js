import React from "react";
import Spinner from "./Spinner";

export default function Button({
  variant = "primary",
  className,
  children,
  onClick,
  loading = false,
  disabled = false,
  ...rest
}) {
  return (
    <button
      {...rest}
      style={{ position: "relative" }}
      onClick={onClick}
      disabled={disabled || loading}
      className={"btn btn-" + variant + " " + className}
    >
      {children}
      {loading ? (
        <div
          style={{
            position: "absolute",
            right: "2px",
            top: "2px",
          }}
        >
          <Spinner />
        </div>
      ) : (
        <></>
      )}
    </button>
  );
}
