import { createBrowserRouter } from "react-router";
import ContextProvider from "./context/ContextProvider.jsx";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import ServiceList from "./pages/Servicelist.jsx";
import ServiceDetail from "./pages/ServiceDetail.jsx";
import Login from "./pages/Login.jsx";
import Products from "./pages/Products.jsx";
import { ProtectedRoute } from "./pages/ProtectedRoute.jsx";

const aprovedRole = ["admin"]

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ContextProvider>
        <App />
      </ContextProvider>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "services",
        element: <ProtectedRoute isAuthenticate={true} aprovedRole={aprovedRole}><Services /></ProtectedRoute>,
        loader:() => import('./data/services'),
        children: [
          {
            index: true,
            element: <ServiceList />,
          },
          {
            path: ":slug",
            element: <ServiceDetail />,
          },
        ],
      },
      {
        path:"/products",
        element:<Products />
      }
    ],
  },
  {
    path: "*",
    element: <div>404 Not Found</div>,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
