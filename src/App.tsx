import Error from "./pages/Error";
import Layout from "./components/Layout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "./routes";
import Hem from "./pages/Hem";
import Wrapper from "./pages/Wrapper";
import Psykoterapi from "./pages/Psykoterapi";
import Kontakt from "./pages/Kontakt";
import {} from "./interfaces/Interface";
import { useRef } from "react";

function App() {
  const hemRef = useRef<HTMLDivElement | null>(null);
  const scrollToRef = (ref: string) => {
    hemRef.current?.scrollIntoView({ behavior: "smooth" });
    return hemRef;
  };

  // Todo: section navigeringen måste fixas. I Children ska Wrapper sköta detta som
  // i sin tur bör skickas ner (forwardref) värden till sina child comp

  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Hem forwardedRef={scrollToRef("Hem")} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
