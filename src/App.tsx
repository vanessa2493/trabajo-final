import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {Dashboard, Login, Profile, SearchFriends, SearchMovies, Signup} from "./pages";
import {AuthProvider, useAuth} from "./contexts";

const App = () => {
    const { currentUser } = useAuth();


  return (
      <BrowserRouter>
        <AuthProvider>
            <Routes>
              <Route
                  path="/"
                  element={
                    currentUser ? <Dashboard /> : <Navigate to="/login" replace />
                  }
              />
              <Route
                  path="login"
                  element={currentUser ? <Navigate to="/" replace /> : <Login />}
              />
              <Route
                  path="signup"
                  element={currentUser ? <Navigate to="/" replace /> : <Signup />}
              />
              <Route
                  path="searchMovies"
                  element={
                    currentUser ? <SearchMovies /> : <Navigate to="/login" replace />
                  }
              />
              <Route
                  path="searchFriends"
                  element={
                    currentUser ? <SearchFriends /> : <Navigate to="/login" replace />
                  }
              />
              <Route
                  path="profile"
                  element={
                    currentUser ? <Profile /> : <Navigate to="/login" replace />
                  }
              />
            </Routes>
        </AuthProvider>
      </BrowserRouter>
  );
};

export { App };
