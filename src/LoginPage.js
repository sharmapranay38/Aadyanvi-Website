import React, { useState } from "react";
import styled from "styled-components";

const LoginContainer = styled.div`
  text-align: center;
  margin-top: 50px;
`;
const Input = styled.input`
  padding: 10px;
  margin: 10px;
  width: 200px;
  border-radius: 5px;
`;
const Button = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

function LoginPage({ setAuth }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "aadyanvi@user" && password === "pass@123") {
      setAuth(true);
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <LoginContainer>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <Button type="submit">Login</Button>
      </form>
    </LoginContainer>
  );
}

export default LoginPage;
