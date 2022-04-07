import Sidebar from "../../components/sidebar/Sidebar"
import "./settings.css"

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/lavender-flowers-and-sunset-rzdeb.jpg"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-solid fa-circle-user"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Meet" />
          <label>Email</label>
          <input type="email" placeholder="mshah@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>

      <Sidebar />
    </div>
  )
}