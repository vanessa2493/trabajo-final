import { createContext, useContext, useEffect, useState, FC, ReactNode } from "react";
import { authService } from "../../services/auth";
import { UserAuth } from "../../types";

interface AuthContextProps {
    currentUser: UserAuth | null;
    isLoading: boolean;
}

const initialContextState: AuthContextProps = {
    currentUser: null,
    isLoading: true,
};

const AuthContext = createContext<AuthContextProps>(initialContextState);

const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<UserAuth | null>(initialContextState.currentUser);
    const [isLoading, setIsLoading] = useState<boolean>(initialContextState.isLoading);

    useEffect(() => {
        const unsubscribe = authService.onAuthStateChanged((user) => {
            setCurrentUser(user);
        });

        return unsubscribe;
    }, []);

    return (
        <AuthContext.Provider value={{ currentUser, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
