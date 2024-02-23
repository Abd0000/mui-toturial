import Create from "pages/Create/Create";
import Home from "pages/Home/Home";
import Root from "pages/Root";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="create" element={<Create />} />
    </Route>
  )
);


//variable to get store the theme status and adding a new color to the theme (ochre)
// you can use this color in the theme.palette.ochre.main and so on
const darkTheme = createTheme({
  palette: {
    mode: "light",
    // @ts-ignore
    bluee: {
      main: '#1E88E5',
      light: '#64B5F6',
      dark: '#0D47A1',
      contrastText: '#fff',
    },
  },

});



// the main function 
function App() {
  return (
    //wrapping the router with the theme provider
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
