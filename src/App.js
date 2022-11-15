import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "./UI/Display/Loader/Loader";
import "./App.css"
const MainLayout = lazy(() => import("./UI/Layout/MainLayout/Pages"));
const Home = lazy(() => import("./Module/Home/pages/Home"));
const Movie = lazy(() => import("./Module/Movie/Pages"));
const Ticket = lazy(() => import("./Module/Ticket/pages"));
const Auth = lazy(() => import("./Module/Auth/pages"));
const Login = lazy(() => import("./Module/Auth/components/Login/Login"));
const Register = lazy(() => import("./Module/Auth/components/Register/Register"));

function App() {
  return (
    <Suspense className="bg-red-50"
      fallback={
        <>
          <div className="h-10"> </div>
          <Loader />
        </>
      }
    >
      <Routes>
        <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="movie/:movieId" element={<Movie />} />
        <Route path="ticket/:ticketId" element={<Ticket />} />
        </Route>
        <Route path="/" element={<Auth />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
