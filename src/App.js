import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Products from "./pages/Products";
import RootLayout from "./pages/Root";
import ProductDetailPage from "./pages/ProductDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {path: "/", element: <Home />},
      {path: "/products", element: <Products />},
      {path: "/products/:id", element: <ProductDetailPage />},
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
