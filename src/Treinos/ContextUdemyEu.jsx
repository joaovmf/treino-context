import { useContext, createContext, useState } from "react";
import "./App.css";

const globalState = {
  title: "O título",
  counter: 0,
  body: "O body",
};
const GlobalContext = createContext();

const Div = ({ children }) => {
  return <H1 />;
};

const H1 = () => {
  const theContext = useContext(GlobalContext);
  const { contextState: { title, body, counter }, setContextState} = theContext;
  return (
    <>
      <h1 onClick={() => setContextState((s) => ({ ...s, counter: s.counter + 1 }))}>
        {title}, {counter}
      </h1>
      <h1 onClick={() => setContextState((s) => ({ ...s, counter: s.counter + 1 }))}>
        {body}, {counter}
      </h1>
    </>
  );
};

const App = () => {
  const [contextState, setContextState] = useState(globalState);

  return (
    <GlobalContext.Provider value={{contextState, setContextState}}>
      <Div />
    </GlobalContext.Provider>
  );
};

export default App;
