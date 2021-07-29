import { useContext, createContext, useState } from "react";
import Div from './components/Div'
import "./App.css";

const globalState = {
  title: "O título",
  counter: 0,
  body: "O body",
};
export const GlobalContext = createContext();

const App = () => {
  const [contextState, setContextState] = useState(globalState);

  return (
    <GlobalContext.Provider value={{contextState, setContextState}}>
      <Div />
    </GlobalContext.Provider>
  );
};

export default App;
