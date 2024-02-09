import Error from "./pages/Error";
import Layout from "./components/Layout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "./routes";
import Hem from "./pages/Hem";
import Wrapper from "./pages/Wrapper";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <Error />,
      children: [{ path: "/", element: <Wrapper /> }],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
