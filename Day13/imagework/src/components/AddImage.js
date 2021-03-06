import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import ImageService from "../services/ImageService";
import FileService from "../services/FileService";

import { Image } from "../model/Image";

export default function AddImage() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [file, setFile] = useState(null);

  async function onFormSubmit(e) {
    e.preventDefault();
    try {
      const downloadUrl = await FileService.uploadImage(file, (progress) => {
        console.log("Upload Progress: ", progress);
      });

      await ImageService.createImage(
        new Image({
          id: null,
          name: name,
          downloadUrl: downloadUrl,
        })
      );

      navigate("/");
    } catch (err) {}
  }

  function onFileSelected(e) {
    if (e.target.files.length) {
      setFile(e.target.files[0]);
    } else {
      setFile(null);
    }
  }

  return (
    <div className="container my-4">
      <div className="card card-body">
        <h1>Add Image</h1>

        <form onSubmit={onFormSubmit}>
          <div className="mb-3">
            <label className="form-label">Image</label>
            <input
              onChange={onFileSelected}
              type="file"
              className="form-control"
              multiple
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Image Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>

          <div className="text-center">
            <button className="btn btn-primary px-5">Add Image</button>
          </div>
        </form>
      </div>
    </div>
  );
}
