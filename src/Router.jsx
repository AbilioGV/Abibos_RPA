import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Pedido } from "./pages/Pedido";
import { Root } from "./components/Root";

export const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root />}>
    <Route index element={<Home />} />
    <Route path="/pedido" element={<Pedido />} />
  </Route>
));
