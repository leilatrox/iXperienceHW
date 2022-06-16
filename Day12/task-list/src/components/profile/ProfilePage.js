import React, { useState, useEffect } from "react";

import ProfileService from "../../services/profile.service";

import Button from "../common/Button";
import Alert from "../common/Alert";
import Spinner from "../common/Spinner";

export default function ProfilePage({ user }) {
  const [profile, setProfile] = useState(null);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [country, setCountry] = useState("");

  const [fetching, setFetching] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchProfile();
  }, []);

  async function fetchProfile() {
    setFetching(true);
    try {
      const profile = await ProfileService.fetchProfiles(user);
      setProfile(profile);
      setName(profile.name || "");
      setSurname(profile.surname || "");
      setCountry(profile.country || "");
    } catch (err) {
      setError(err.message);
    }
    setFetching(false);
  }

  async function onFormSubmit(e) {
    e.preventDefault();
    setSaving(true);
    try {
      profile.name = name;
      profile.surname = surname;
      profile.country = country;
      //form input validation
      if (!profile.isValid()) {
        setError("Please populate all fields");
        setSaving(false);
        return;
      }

      await ProfileService.saveProfile(profile);
      setError("");
      setMessage("Profile Successfully Saved");
    } catch (err) {
      setError(err.message);
    }
    setSaving(false);
  }

  return (
    <div className="container my-4">
      {fetching ? (
        <div className="text-center">
          <Spinner />
        </div>
      ) : (
        <div className="card card-body">
          <h1>User Profile</h1>
          <p>Enter details to update your profile</p>
          <form onSubmit={onFormSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Surname</label>
              <input
                type="text"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Country</label>
              <input
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="d-flex justify-content-end mt-4">
              <Button type="submit" className="px-5" loading={saving}>
                Save Profile
              </Button>
            </div>
          </form>

          <Alert className="mt-4" show={error} onHide={() => setError("")}>
            {error}
          </Alert>

          <Alert
            className="mt-4"
            variant="success"
            show={message}
            onHide={() => setMessage("")}
          >
            {message}
          </Alert>
        </div>
      )}
    </div>
  );
}
