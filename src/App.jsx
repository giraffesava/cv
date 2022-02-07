import Header from "./components/Header/Header";
import "./App.scss";
import Main from "./components/Main/Main";
import { BrowserRouter } from "react-router-dom";
//import Cursor from "./components/ui/Cursor";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Cursor /> */}
        <Header />
        <Main />
      </div>
    </BrowserRouter>
  );
};

export default App;
