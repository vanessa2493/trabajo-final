import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Dashboard,
  Login,
  Profile,
  SearchMovies,
  Signup,
  SearchFriends,
} from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="searchMovies" element={<SearchMovies />} />
        <Route path="searchFriends" element={<SearchFriends />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export { App };
