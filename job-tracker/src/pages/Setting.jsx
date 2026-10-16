import { useEffect, useState } from "react";
import {
  Bell,
  Check,
  Palette,
  Shield,
  UserRound,
} from "lucide-react";
import "./Setting.css";

const sections = [
  { id: "profile", label: "Profile", icon: UserRound },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "appearance", label: "Appearance", icon: Palette },
  { id: "security", label: "Security", icon: Shield },
];

export function Setting() {
  const [activeSection, setActiveSection] = useState("profile");
  const [profile, setProfile] = useState({
    name: "Zumar Arshad",
    email: "zumar@example.com",
    bio: "Frontend & WordPress Developer",
  });
  const [photoUrl, setPhotoUrl] = useState("");
  const [saved, setSaved] = useState(false);
  const [notifications, setNotifications] = useState({
    applicationUpdates: true,
    interviewReminders: true,
    productNews: false,
  });
  const [appearance, setAppearance] = useState({
    theme: "System",
    density: "Comfortable",
  });
  const [passwords, setPasswords] = useState({
    current: "",
    next: "",
    confirm: "",
  });

  useEffect(
    () => () => {
      if (photoUrl) {
        URL.revokeObjectURL(photoUrl);
      }
    },
    [photoUrl],
  );

  const updateProfile = (event) => {
    const { name, value } = event.target;
    setProfile((current) => ({ ...current, [name]: value }));
    setSaved(false);
  };

  const saveSettings = (event) => {
    event.preventDefault();
    setSaved(true);
  };

  const toggleNotification = (event) => {
    const { name, checked } = event.target;
    setNotifications((current) => ({ ...current, [name]: checked }));
    setSaved(false);
  };

  const updatePassword = (event) => {
    const { name, value } = event.target;
    setPasswords((current) => ({ ...current, [name]: value }));
    setSaved(false);
  };

  const renderSection = () => {
    if (activeSection === "profile") {
      return (
        <form className="settings-form" onSubmit={saveSettings}>
          <div className="settings-panel-heading">
            <h2>Profile Settings</h2>
            <p>Update your personal information.</p>
          </div>

          <div className="settings-photo-row">
            <input
              className="settings-file-input"
              id="profile-photo"
              type="file"
              accept="image/*"
              aria-label="Choose a profile photo"
              onChange={(event) => {
                const file = event.target.files?.[0];
                if (file) {
                  setPhotoUrl(URL.createObjectURL(file));
                }
              }}
            />
            <div className="settings-avatar" aria-label="Profile photo">
              {photoUrl ? (
                <img src={photoUrl} alt="" />
              ) : (
                profile.name
                  .trim()
                  .split(/\s+/)
                  .map((part) => part[0])
                  .join("")
                  .slice(0, 2)
                  .toUpperCase()
              )}
            </div>
            <label className="settings-secondary-button" htmlFor="profile-photo">
              Change Photo
            </label>
          </div>

          <label className="settings-field">
            <span>Full Name</span>
            <input
              name="name"
              autoComplete="name"
              value={profile.name}
              onChange={updateProfile}
              required
            />
          </label>

          <label className="settings-field">
            <span>Email</span>
            <input
              name="email"
              type="email"
              autoComplete="email"
              value={profile.email}
              onChange={updateProfile}
              required
            />
          </label>

          <label className="settings-field">
            <span>Bio</span>
            <textarea
              name="bio"
              rows="4"
              value={profile.bio}
              onChange={updateProfile}
            />
          </label>

          <div className="settings-form-footer">
            {saved && (
              <span className="settings-saved" role="status">
                <Check size={16} /> Changes saved
              </span>
            )}
            <button className="settings-primary-button" type="submit">
              Save Changes
            </button>
          </div>
        </form>
      );
    }

    if (activeSection === "notifications") {
      return (
        <form className="settings-form" onSubmit={saveSettings}>
          <div className="settings-panel-heading">
            <h2>Notification Settings</h2>
            <p>Choose which updates you would like to receive.</p>
          </div>

          <div className="settings-options">
            {[
              {
                name: "applicationUpdates",
                title: "Application updates",
                description: "Get notified when an application status changes.",
              },
              {
                name: "interviewReminders",
                title: "Interview reminders",
                description: "Receive reminders about upcoming interviews.",
              },
              {
                name: "productNews",
                title: "Product news",
                description: "Occasional tips and updates about JobTrack.",
              },
            ].map((option) => (
              <label className="settings-option" key={option.name}>
                <span>
                  <strong>{option.title}</strong>
                  <small>{option.description}</small>
                </span>
                <input
                  type="checkbox"
                  name={option.name}
                  checked={notifications[option.name]}
                  onChange={toggleNotification}
                />
              </label>
            ))}
          </div>

          <div className="settings-form-footer">
            {saved && (
              <span className="settings-saved" role="status">
                <Check size={16} /> Changes saved
              </span>
            )}
            <button className="settings-primary-button" type="submit">
              Save Changes
            </button>
          </div>
        </form>
      );
    }

    if (activeSection === "appearance") {
      return (
        <form className="settings-form" onSubmit={saveSettings}>
          <div className="settings-panel-heading">
            <h2>Appearance</h2>
            <p>Adjust how JobTrack looks on your device.</p>
          </div>

          <label className="settings-field">
            <span>Theme</span>
            <select
              value={appearance.theme}
              onChange={(event) => {
                setAppearance((current) => ({
                  ...current,
                  theme: event.target.value,
                }));
                setSaved(false);
              }}
            >
              <option>System</option>
              <option>Light</option>
              <option>Dark</option>
            </select>
          </label>

          <label className="settings-field">
            <span>Display density</span>
            <select
              value={appearance.density}
              onChange={(event) => {
                setAppearance((current) => ({
                  ...current,
                  density: event.target.value,
                }));
                setSaved(false);
              }}
            >
              <option>Comfortable</option>
              <option>Compact</option>
            </select>
          </label>

          <div className="settings-form-footer">
            {saved && (
              <span className="settings-saved" role="status">
                <Check size={16} /> Changes saved
              </span>
            )}
            <button className="settings-primary-button" type="submit">
              Save Changes
            </button>
          </div>
        </form>
      );
    }

    return (
      <form
        className="settings-form"
        onSubmit={(event) => {
          event.preventDefault();
          if (passwords.next !== passwords.confirm) {
            setSaved(false);
            return;
          }
          setSaved(true);
          setPasswords({ current: "", next: "", confirm: "" });
        }}
      >
        <div className="settings-panel-heading">
          <h2>Security</h2>
          <p>Keep your account secure by updating your password.</p>
        </div>

        <label className="settings-field">
          <span>Current Password</span>
          <input
            type="password"
            name="current"
            autoComplete="current-password"
            value={passwords.current}
            onChange={updatePassword}
            required
          />
        </label>

        <label className="settings-field">
          <span>New Password</span>
          <input
            type="password"
            name="next"
            autoComplete="new-password"
            minLength="8"
            value={passwords.next}
            onChange={updatePassword}
            required
          />
        </label>

        <label className="settings-field">
          <span>Confirm New Password</span>
          <input
            type="password"
            name="confirm"
            autoComplete="new-password"
            minLength="8"
            value={passwords.confirm}
            onChange={updatePassword}
            required
          />
        </label>

        {passwords.confirm && passwords.next !== passwords.confirm && (
          <p className="settings-error" role="alert">
            Passwords do not match.
          </p>
        )}

        <div className="settings-form-footer">
          {saved && (
            <span className="settings-saved" role="status">
              <Check size={16} /> Changes saved
            </span>
          )}
          <button
            className="settings-primary-button"
            type="submit"
            disabled={passwords.next !== passwords.confirm}
          >
            Update Password
          </button>
        </div>
      </form>
    );
  };

  return (
    <section className="settings-page">
      <h1 className="settings-page-title">Settings</h1>
      <div className="settings-layout">
        <nav className="settings-tabs" aria-label="Settings sections">
          {sections.map(({ id, label, icon: Icon }) => (
            <button
              type="button"
              key={id}
              className={`settings-tab${activeSection === id ? " active" : ""}`}
              aria-current={activeSection === id ? "page" : undefined}
              onClick={() => {
                setActiveSection(id);
                setSaved(false);
              }}
            >
              <Icon size={17} />
              <span>{label}</span>
            </button>
          ))}
        </nav>

        <div className="settings-content">{renderSection()}</div>
      </div>
    </section>
  );
}
