import { useState } from "react";
import "./App.css";
import logoImg from "./assets/logo-avispec.jpg"

function App() { 

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => { 
    try {
      const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify({
          email: email,      
          password: password, 
        }),
      });

      if (response.ok) {
        const token = await response.text();
        alert("Login successful! Your token is: " + token);
      } 
      else {
        const errorText = await response.text();
        alert("Login error: " + errorText);
      }
    } 
    catch (error) {
      alert("Critical network error: Unable to connect to the back-end.");
    }
  };

  return (
    <div className="login-container">
    <img src={logoImg} alt="Logo Avispec" className="login-logo" />

      <h1>Avispec</h1>

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
