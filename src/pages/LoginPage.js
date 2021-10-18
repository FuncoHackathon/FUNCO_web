import React, { memo } from "react";
import LoginForm from "../components/LoginForm";
import Temp from "./Temp";

const LoginPage = memo(() => {
  return (
    <Temp>
      <LoginForm />
    </Temp>
  );
});

export default LoginPage;
