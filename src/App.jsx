import Counter from "./components/Counter/Counter";
import Mirror from "./components/Mirror/Mirror";
import CountProvider from "./context/Count";
import "./App.css";

const App = () => {

  return (
    <CountProvider>
      <div>
        <Counter/>
        <hr />
        <Mirror/>
      </div>
    </CountProvider>
  );
};

export default App;
