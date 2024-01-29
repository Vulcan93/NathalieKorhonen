import Hem from "./pages/Hem";
import Psykoterapi from "./pages/Psykoterapi";
import Kontakt from "./pages/Kontakt";
import Error from "./pages/Error";
import Layout from "./components/Layout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Hem />,
        },
        {
          path: "/psykoterapi",
          element: <Psykoterapi />,
        },
        {
          path: "/kontakt",
          element: <Kontakt />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
