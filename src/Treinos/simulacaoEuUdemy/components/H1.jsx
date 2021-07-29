import { useContext } from "react";
import {GlobalContext} from '../App'

const H1 = () => {
    const theContext = useContext(GlobalContext);
    const { contextState: { title, body, counter }, setContextState, contextState} = theContext;
    return (
      <>
        <h1 onClick={() => setContextState({ ...contextState, counter: counter + 1 })}>
          {title}, {counter}
        </h1>
        <h1 onClick={() => setContextState({ ...contextState, counter: counter + 1 })}>
          {body}, {counter}
        </h1>
      </>
      
    );
  };

  export default H1;