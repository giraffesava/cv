import Header from "./components/Header/Header";
import "./App.scss";
import Main from "./components/Main/Main";
import { BrowserRouter } from "react-router-dom";
//import Cursor from "./components/ui/Cursor";

import i18n from "i18next";
import { /*useTranslation,*/ initReactI18next } from "react-i18next";
import { intl } from "./i18next/i18next";

i18n.use(initReactI18next).init(intl);

const App = () => {
  // const { t } = useTranslation();

  // const onChange = () => {
  //   i18n.changeLanguage("rus");
  // };
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Cursor /> */}
        {/* <button onClick={onChange}>CHANGE</button>
        <h1>{t("welcome")}</h1> */}
        <Header />
        <Main />
      </div>
    </BrowserRouter>
  );
};

export default App;
