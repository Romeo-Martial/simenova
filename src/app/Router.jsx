import { createBrowserRouter } from "react-router-dom";
import PageLayout from "../components/layout/pageLayout/PageLayout";
import HomePage from "../pages/home/HomePage";
import AboutPage from "../pages/about/AboutPage";
import ServicesPage from "../pages/services/ServicesPage";
import CaseStudiesPage from "../pages/caseStudies/caseStudiesPage";
import TeamPage from "../pages/team/TeamPage";
import BlogPage from "../pages/blog/BlogPage";
import ContactPage from "../pages/contact/ContactPage";
import NotFoundPage from "../pages/notFound/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "services", element: <ServicesPage /> },
      { path: "case-studies", element: <CaseStudiesPage /> },
      { path: "team", element: <TeamPage /> },
      { path: "blog", element: <BlogPage /> },
      { path: "contact", element: <ContactPage /> },
    ],
  },
]);

export default router;
