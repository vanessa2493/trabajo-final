import { useContext, FC, useEffect, useState } from "react";
import { AuthContext } from "../../contexts";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../services/auth";

const publicRoutes = ["/login", "/signup"];

const withAuth = <Props extends object>(Component: FC<Props>): FC<Props> => {
    const Authenticated = (props: Props) => {
        const { currentUser } = useContext(AuthContext);
        const navigate = useNavigate();
        const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

        useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, (user) => {
                if (user) {
                    setIsAuthenticated(true);
                } else {
                    setIsAuthenticated(false);
                }
            });

            return () => unsubscribe();
        }, []);

        if (isAuthenticated === null) {
            // still checking authentication status
            return null;
        }

        const isPublicRoute = publicRoutes.includes(window.location.pathname);

        if (isAuthenticated && isPublicRoute) {
            // user is authenticated and trying to access a public route like /login or /signup
            navigate("/");
            return null;
        }

        if (!isAuthenticated && !isPublicRoute) {
            // user is not authenticated and trying to access a private route
            navigate("/login");
            return null;
        }

        // user is authenticated and trying to access a private route
        return <Component {...props} />;
    };

    return Authenticated;
};

export { withAuth };
