import {Layout, SignupForm} from "../../components";
import React from "react";
import {withAuth} from "../../hoc";

const SignupPage = () => {
  return (
      <Layout page={'Login'}>
        <SignupForm/>
      </Layout>
  )
}

export const Signup = withAuth(SignupPage);

