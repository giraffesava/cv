import React from "react";
import { useTranslation } from "react-i18next";

const HardSkills = () => {
  const { t } = useTranslation();

  return (
    <div className="hard-skills">
      <h3>{t("hardSkillsPage.0")}</h3>
      <h3>{t("hardSkillsPage.1")}</h3>
      <ul>
        <li>{t("hardSkillsPage.2")}</li>
        <li>{t("hardSkillsPage.3")}</li>
        <li>{t("hardSkillsPage.4")}</li>
        <li>{t("hardSkillsPage.5")}</li>
      </ul>
    </div>
  );
};

export default HardSkills;
