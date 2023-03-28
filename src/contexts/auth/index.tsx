import { createContext, useContext, useEffect, useState, FC, ReactNode } from "react";
import { authService } from "../../services/auth";
import { UserAuth } from "../../types";

interface AuthContextProps {
    currentUser: UserAuth | null;
    isLoading: boolean;
    setCurrentUser: (user: UserAuth | null) => void; // Agrega la función setCurrentUser al contexto
}

const initialContextState: AuthContextProps = {
    currentUser: null,
    isLoading: true,
    setCurrentUser: () => {}, // Inicializa la función setCurrentUser
};

const AuthContext = createContext<AuthContextProps>(initialContextState);

const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<UserAuth | null>(initialContextState.currentUser);
    const [isLoading, setIsLoading] = useState<boolean>(initialContextState.isLoading);

    useEffect(() => {
        const unsubscribe = authService.onAuthStateChanged((user) => {
            setCurrentUser(user);
            console.log("estoy en el auth provider:", user);
        });

        return unsubscribe;
    }, []);

    return (
        <AuthContext.Provider value={{ currentUser, isLoading, setCurrentUser }}> {/* Agrega setCurrentUser al objeto proporcionado por el proveedor */}
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
