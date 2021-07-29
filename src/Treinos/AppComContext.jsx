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
  return (
    <UserContext.Provider value={state}>
      <UserProfile />
      <UserContext.Provider value={{ name: "bertolini" }}>
        <div className="App">
          <button onClick={() => setState({name: 'da rola grande'})}>Click</button>
          <Page>
            <UserProfile />
            <UserContext.Provider value={{ name: "bruno" }}>
              <UserProfile />
            </UserContext.Provider>
          </Page>
        </div>
      </UserContext.Provider>
    </UserContext.Provider>
  );
}
