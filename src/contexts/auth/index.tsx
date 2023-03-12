import { createContext, useState, useEffect, FC, ReactNode } from "react";
import { auth } from "../../services/auth";

type AuthContextProps = {
    currentUser: any;
    setCurrentUser: React.Dispatch<React.SetStateAction<any>>;
}

const AuthContext = createContext<AuthContextProps>({
    currentUser: null,
    setCurrentUser: () => {},
});

const AuthProvider: FC<{children: ReactNode}> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<any>(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };