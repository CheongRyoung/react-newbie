import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Detail from "./routes/Detail";
import Home from "./routes/Home";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/hello",
      element: <h1>Hello</h1>,
    },
    {
      path: "/movie/:id",
      element: <Detail/>,

    }
  ])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
