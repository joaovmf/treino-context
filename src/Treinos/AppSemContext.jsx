import React from 'react'
import './App.css';

const NavigationBar = ({user, avatarSize}) => {
  <Link href={user.url}>
    <Avatar user={user} avatarSize={avatarSize} />
  </Link>

}

const PageLayout = ({user, avatarSize}) => {
  <NavigationBar user={user} avatarSize={avatarSize} />
}

const Page = ({user, avatarSize}) => {
  <PageLayout user={user} avatarSize={avatarSize} />
}

function AppSemContext() {
  return (
    <div className="AppSemContext">
      <h1>Codar.me - React context API </h1>
      <Page user={user} avatarSize={avatarSize}/>
    </div>  
  );
}

export default AppSemContext;
