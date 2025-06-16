import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import PageLayout from "./layouts/PageLayout";
import { About, Contact, Gallery, Home, Story } from "./sections";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<PageLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="story" element={<Story />} />
        <Route path="gallery" element={<Gallery />} />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
}

export default App;
