import { useState } from "react";
import "./App.css";
import logoImg from "./assets/logo.jpeg"

function App() { 

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => { 
    alert("E-mail capturado: " + email + "\nSenha capturada: " + password);
  };

  return (
    <div className="login-container">
    <img src={logoImg} alt="Logo BSGranjas" className="login-logo" />

      <h1>BSGranjas</h1>

      <input
      type="email"
      placeholder="Digite seu e-mail"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      />

      <input
      type="password"
      placeholder="Digite sua senha"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Entrar</button>

    </div>
  )
}

export default App
