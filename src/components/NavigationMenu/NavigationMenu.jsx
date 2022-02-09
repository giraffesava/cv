import React from "react";
import "./styles.scss";
import { useTranslation } from "react-i18next";
import CustomNavLink from "../ui/CustomNavLink/CustomNavLink";
const NavigationMenu = () => {
  const { t } = useTranslation();
  return (
    <div className="navigation-container">
      <nav className="navigation-container__links">
        <CustomNavLink href="/">{t("aboutMe")}</CustomNavLink>
        <CustomNavLink href="/hard-skills">{t("hardSkills")}</CustomNavLink>
        <CustomNavLink href="/soft-skills">{t("softSkills")}</CustomNavLink>
        <CustomNavLink href="/experience">{t("experience")}</CustomNavLink>
      </nav>
    </div>
  );
};

export default NavigationMenu;
