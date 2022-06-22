import React from "react";
import { useNavigate } from "react-router-dom";

export default function ImagesPage() {
  const navigate = useNavigate();

  const routeChange = () => {
    navigate("add-image");
  };

  return (
    <div className="p-5">
      <button className="btn btn-primary" onClick={routeChange}>
        Add Image
      </button>
    </div>
  );
}
