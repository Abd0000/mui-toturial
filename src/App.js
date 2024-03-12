import Create from "pages/Create/Create";
import Home from "pages/Home/Home";
import NotFound from "pages/NotFound/NotFound";
import Root from "pages/Root";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="create" element={<Create />} />
    {/* // if the path is not found, it will redirect to the NotFound page */}
      <Route path="*" element={<NotFound />} /> 
    </Route>
  )
);

// the main function
function App() {
  return (

    <RouterProvider router={router} />
  );
}

export default App;
