import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import PageLayout from "./layouts/PageLayout";
import {
  About,
  Contact,
  Gallery,
  Home,
  SchoolOutreach,
  YoungMothers,
} from "./sections";
import Programs from "./sections/Programs";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<PageLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="programs" element={<Programs />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="schooloutreach" element={<SchoolOutreach />} />
        <Route path="youngmothers" element={<YoungMothers />} />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
}

export default App;
