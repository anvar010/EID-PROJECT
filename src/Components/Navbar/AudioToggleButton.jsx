import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import playIcon from "./../../assets/images/speaker.png";
import pauseIcon from "./../../assets/images/speakermute.png";

export const AudioToggleButton = ({ audioActive, setAudioActive }) => {
  const { t } = useTranslation();

  const playAudio = async () => {
    try {
      setAudioActive(true);
    } catch (err) {
      setAudioActive(false);
    }
  };

  const pauseAudio = async () => {
    setAudioActive(false);
  };

  return (
    <div className="switch-container">
      <button
        className="switch-button"
        onClick={pauseAudio}
        disabled={!audioActive}
      >
        <img src={pauseIcon} alt="Pause audio" />
      </button>
      <button
        className="switch-button"
        onClick={playAudio}
        disabled={audioActive}
      >
        <img src={playIcon} alt="Play audio" />
      </button>
    </div>
  );
};
