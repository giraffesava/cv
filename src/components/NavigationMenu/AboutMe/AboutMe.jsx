import React from "react";
import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const { t } = useTranslation();
  return (
    <div className="about">
      <ul>
        <li>
          {t("aboutMePage.age.title")}: {t("aboutMePage.age.value")}
        </li>

        <li>
          {t("aboutMePage.name.title")}: {t("aboutMePage.name.value")}
        </li>
        <li>
          {t("aboutMePage.interests.title")}: {t("aboutMePage.interests.value")}
        </li>
        <li>
          {t("aboutMePage.education.title")}: {t("aboutMePage.education.value")}
        </li>
      </ul>
    </div>
  );
};

export default AboutMe;
