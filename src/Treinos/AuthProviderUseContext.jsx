import React, { useContext } from "react";
import {AuthProvider, AuthContext } from './AuthProvider'

const Login = () => {
  const [, setUser] = useContext(AuthContext)
  
  return <button onClick={() => setUser({name: 'João'})}>Entrar</button>
}

const UserProfile = () => {
  const [user , setUser] = useContext(AuthContext)

  return <div>
    Olá {user.name}
    <button onClick={() => setUser(false)}>SAIR</button>
  </div>
}

const Main = () => {
  const [user] = useContext(AuthContext);

  return user ? <UserProfile/> : <Login/>
}

export default function App() {
  return (
    <AuthProvider>
      <>
      <h1>Codar.me - React context API </h1>
      <Main/>
      </>
    </AuthProvider>
  );
}
