import React, { createContext, useContext, useState } from "react";

const ProfileSettingsContext = createContext({});

export const initialUserState = {
  profileImage: {
    imgURI: "",
    remoteURL: "",
    isUploading: false,
    progress: 0,
    error: null,
    message: "",
    isSaved: true,
  },
};

export const ProfileSettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState(initialUserState);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <ProfileSettingsContext.Provider
      value={{
        settings,
        setSettings,
        message,
        setMessage,
        loading,
        setLoading,
      }}
    >
      {children}
    </ProfileSettingsContext.Provider>
  );
};

export default function useProfileSettings() {
  return useContext(ProfileSettingsContext);
}
