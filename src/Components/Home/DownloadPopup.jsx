import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function DownloadFilePopup({
  isOpen,
  image,
  url,
  closeModal,
  targetEvent,
}) {
  const { t } = useTranslation();
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content download-popup">
        <div className="modal-header">
          <div className="download-container">
            <div className="download-preview">
              <img src={image} className="img-fit" alt="" />
            </div>
          </div>
        </div>
        <a
          //   href={url}
          download
          className="modal-button"
          //   onClick={() => {
          //     if (targetEvent && targetEvent !== "") {
          //       triggerEvent(targetEvent, "File_download");
          //     }
          //   }}
        >
          {t("DownloadPopup.ButtonText")}
        </a>
      </div>
    </div>
  );
}
