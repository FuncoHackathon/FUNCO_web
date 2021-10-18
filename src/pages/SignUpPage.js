import React, { memo } from "react";
import SignForm from "../components/SignForm";
import Temp from "../pages/Temp";

const SignUp = memo(() => {
  return (
    <Temp>
      <SignForm />
    </Temp>
  );
});

export default SignUp;
