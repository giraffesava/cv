import Header from "./components/Header";
import "./App.scss";
import Main from "./components/Main";
//import Cursor from "./components/ui/Cursor";

const App = () => {
  return (
    <div className="App">
      {/* <Cursor /> */}
      <Header />
      <Main />
    </div>
  );
};

export default App;
