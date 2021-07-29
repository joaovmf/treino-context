import React from "react";
import "./App.css";

const NavigationBar = ({ children }) => { <div>{children}</div>};
const PageLayout = ({ children }) => {<NavigationBar>{children}</NavigationBar>;};
const Page = ({ children }) => {<PageLayout>;{children}</PageLayout>;};

function App() {
  return (
    <div className="App">
      <h1>Codar.me - React context API </h1>
      <Page>
        <Link href={user.url}>
          <Avatar user={user} avatarSize={avatarSize} />
        </Link>
      </Page>
    </div>
  );
}

export default App;
