import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from './pages/LandingPage/LandingPage';
import ProjectSettingsPage from './pages/ProjectSettingsPage/ProjectSettingsPage';
import EditTranscriptPage from './pages/EditTranscriptPage/EditTranscriptPage';
import WidgetConfigurationPage from './pages/WidgetConfigurationPage/WidgetConfigurationPage';
import AccountSettingsPage from './pages/AccountSettingsPage/AccountSettingsPage';

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/projects",
        element: <ProjectSettingsPage />,
      },
      {
        path: "/transcript",
        element: <EditTranscriptPage />,
      },
      {
        path: "/configuration",
        element: <WidgetConfigurationPage />,
      },
      {
        path: "/settings",
        element: <AccountSettingsPage />,
      },
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
