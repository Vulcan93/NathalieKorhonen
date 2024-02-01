import Error from "./pages/Error";
import Layout from "./components/Layout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "./routes";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <Error />,
      children: routes,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
