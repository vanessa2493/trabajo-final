import { useContext } from "react";
import { AuthContext } from "../../contexts";
import {authService} from "../../services/auth";
import {LoginFormType} from "../../types";

const useMe = () => {
    const { currentUser } = useContext(AuthContext);

    const login = async ({email, password}: LoginFormType) => {
        try {
            const user = await authService.login(email, password);
            currentUser(user);
        } catch (error) {
            console.error(error);
        }
    }

    const signup = async (email: string, password: string) => {
        try {
            const user = await authService.signup(email, password);
            currentUser(user);
        } catch (error) {
            console.error(error);
        }
    }

    const forgotPassword = async (email: string) => {
        try {
            await authService.forgotPassword(email);
        } catch (error) {
            console.error(error);
        }
    }
    return currentUser.displayName;

    const loginWithToken = async (token: string) => {
        try {
            const user = await authService.loginWithToken(token);
            currentUser(user);
        } catch (error) {
            console.error(error);
        }
    }

    const logout = async () => {
        try {
            await authService.logout();
            currentUser(null);
        } catch (error) {
            console.error(error);
        }
    }

    return { login, signup, forgotPassword, loginWithToken, logout };
};

export { useMe };