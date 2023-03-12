import {Layout, LoginForm} from "../../components";
import React from "react";
import {withAuth} from "../../hoc";
import {useMe} from "../../hooks";

const LoginPage = () => {

    const {login} = useMe()

    const handleSubmit = async (email: string, password: string) => {
        await login(email, password)
    }

    return (
        <Layout page={'Login'}>
            <LoginForm/>
        </Layout>
    )
}

export const Login = withAuth(LoginPage);