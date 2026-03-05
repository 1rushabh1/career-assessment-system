import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

export default function Profile() {

  const [profile, setProfile] = useState({
    classLevel: "",
    math: "",
    science: ""
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/assessment");
  };

  return (

    <div className="profile-page">

      <div className="profile-card">

        <h2>Student Profile</h2>

        <form onSubmit={handleSubmit}>

          <input
            placeholder="Class Level"
            onChange={e =>
              setProfile({ ...profile, classLevel: e.target.value })
            }
          />

          <input
            placeholder="Math Score"
            onChange={e =>
              setProfile({ ...profile, math: e.target.value })
            }
          />

          <input
            placeholder="Science Score"
            onChange={e =>
              setProfile({ ...profile, science: e.target.value })
            }
          />

          <button type="submit">
            Next
          </button>

        </form>

      </div>

    </div>

  );

}