import React from "react";
import Image from "../Image/Image";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import Icons from "../ui/Icons/Icons";
import "./styles.scss";
import { useTranslation } from "react-i18next";
const Navigation = () => {
  const { t } = useTranslation();
  return (
    <div className="navigation">
      <Image />
      <Icons />

      <h1>{t("position")}</h1>
      <NavigationMenu />
    </div>
  );
};

export default Navigation;
