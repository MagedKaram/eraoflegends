import "./global.css";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";

import MainLayout from "@/layouts/MainLayout";
import Index from "./pages/Index";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Support from "./pages/Support";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const rawBaseUrl = import.meta.env.BASE_URL || "/";
const basename = rawBaseUrl === "/" ? "/" : rawBaseUrl.replace(/\/$/, "");

// ✅ Data Router بدل BrowserRouter/Routes
const router = createBrowserRouter(
  [
    {
      element: <MainLayout />, // فيه Navbar + Footer + (هنضيف المودال هناك)
      children: [
        { path: "/", element: <Index /> },

        { path: "/login", element: <SignIn /> },
        { path: "/register", element: <Register /> },

        { path: "/privacy", element: <Privacy /> },
        { path: "/terms", element: <Terms /> },
        { path: "/support", element: <Support /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ],
  { basename },
);

const App = () => (
  <LanguageProvider>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
    </QueryClientProvider>
  </LanguageProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
