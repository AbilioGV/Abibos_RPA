import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { useLayoutEffect } from "react";

export function Root() {
  const location = useLocation();

  useLayoutEffect(
    ()=> {
      document.documentElement.scrollTo(0,0)
    }, [location.pathname]
  )

  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
