import { useContext } from "react";
import { authService } from "../../services/auth";
import { AuthContext } from "../../contexts";

const useAuth = () => {
    const { currentUser, setCurrentUser } = useContext(AuthContext);

    const signup = async (email: string, password: string) => {
        try {
            const user = await authService.signup(email, password);
            setCurrentUser(user);
        } catch (error) {
            console.error(error);
        }
    };

    const login = async (email: string, password: string) => {
        try {
            const user = await authService.login(email, password);
            setCurrentUser(user);
        } catch (error) {
            console.error(error);
        }
    };

    const logout = async () => {
        try {
            await authService.logout();
            setCurrentUser(null);
        } catch (error) {
            console.error(error);
        }
    };

    return { currentUser, signup, login, logout };
};

export {useAuth}