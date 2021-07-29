import React, {useContext, useState} from "react";

const UserContext = React.createContext({ name: "Bruno Bertolini" }); 

//Só para exemplificar com class
//class UserProfile extends React.Component {
 // static contextType = UserContext;
 // render () {
 //   return <div>{this.context.name}</div>
 // }
// }

const UserProfile = () => {
  const user = useContext(UserContext)
  return (
      <div>{user.name}</div>
  )
}
  
const NavigationBar = ({ children }) => <div>{children}</div>;
const PageLayout = ({ children }) => <NavigationBar>{children}</NavigationBar>;
const Page = ({ children }) => <PageLayout>{children}</PageLayout>;

export default function App() {
  const [state, setState] = useState({name: 'joão'})
  const [state2, setState2] = useState({name: 'bruno'})
  return (
    <UserContext.Provider value={state} >
      <UserProfile />
      <UserContext.Provider>
      <button onClick={() => setState({name: 'da rola grande'})}>Click</button>
      </UserContext.Provider>
      <UserContext.Provider value={state2}>
      <UserProfile />
      </UserContext.Provider>
      <UserContext.Provider>
      <button onClick={() => setState2({name: 'da rola pequena'})}>Click</button>
      </UserContext.Provider>
    </UserContext.Provider>
  );
}
