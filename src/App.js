import './App.scss';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Root from './Root.jsx';
import Home from './view/Home.jsx';
import ErrorPage from './view/ErrorPage.jsx';
import About from './view/About.jsx'; 
import Contact from './view/Contact.jsx';
import Portfolio from './view/Portfolio.jsx';
import Menu from './view/Menu.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/menu" element={<Menu />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />;
}

export default App;
