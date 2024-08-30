import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";
import { useParams } from "react-router-dom";

import "../../assets/SCSS/Home/buttonSection.scss";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DownloadFilePopup from "./DownloadPopup";
import greetingElement01 from "../../assets/images/greetingElement01.png";
import bookletElement01 from "../../assets/images/bookletElement01.png";
import HouseThumbnail from "../../assets/images/companies_thumb.png";
import CompanyThumbnail from "../../assets/images/companies_thumb.png";

gsap.registerPlugin(ScrollTrigger);

export default function ButtonSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pdfthumbnail, setPdfthumbnail] = useState("");
  const [downloadLink, setDownloadLink] = useState("");
  const [targetEventName, setTargetEventName] = useState("");
  const { lang } = useParams();
  const animPlayed = useRef(false);
  const sectionRef = useRef(null);
  useEffect(() => {
    const section = sectionRef.current;
    gsap.to(section, {
      scrollTrigger: {
        trigger: section,
        start: "top center",
        end: "bottom center",
        id: "3",
        onEnter: () => {
          if (!animPlayed.current) {
            animPlayed.current = true;
            playIntro();
          }
        },
      },
    });
  }, []);
  const playIntro = () => {
    gsap.to([".buttonStars"], {
      scale: 1.2,
      duration: 1.5,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });
  };
  const { t } = useTranslation();

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handlOpenModal = () => {
    setIsModalOpen(true);
  };
  const setModalData = (image, event) => {
    setPdfthumbnail(image);
    setTargetEventName(event);
    handlOpenModal();
  };
  return (
    <>
      <DownloadFilePopup
        isOpen={isModalOpen}
        image={pdfthumbnail}
        closeModal={handleCloseModal}
        targetEvent={targetEventName}
        url={downloadLink}
      />
      <section ref={sectionRef} className="ButtonSection Buttontranslate">
        <div className="ButtonContainer">
          <div className="buttonsectionWrap">
            <a
              onClick={() => {
                setModalData(bookletElement01, "Booklet_2024");
              }}
              className="btn btn-primary"
              dangerouslySetInnerHTML={{ __html: t("Buttontranslate.title4") }}
            />
            <button
              onClick={() => {
                setModalData(greetingElement01, "Greeting_Cards_2024");
              }}
              download
              className="btn btn-primary"
              dangerouslySetInnerHTML={{ __html: t("Buttontranslate.title2") }}
            />
            <button
              onClick={() => {
                setModalData(HouseThumbnail, "Houses_Decorations_2024");
              }}
              className="btn btn-primary"
              dangerouslySetInnerHTML={{ __html: t("Buttontranslate.title1") }}
            />
            <button
              onClick={() => {
                setModalData(CompanyThumbnail, "Companies_Decorations_2024");
              }}
              className="btn btn-primary"
              dangerouslySetInnerHTML={{ __html: t("Buttontranslate.title5") }}
            />
          </div>
        </div>
        <div className="button-element-star">
          {/* <div className="button-star">
            <Parallax speed={10}>
              <img
                src={buttonStarImage}
                className=" buttonStars img-fit"
                alt=""
              />
            </Parallax>
          </div> */}
        </div>
      </section>
    </>
  );
}
