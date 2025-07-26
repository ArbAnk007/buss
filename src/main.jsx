import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { HomePage, AboutPage, ServicesPage, ContactPage } from "./pages/index.js";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "",
				element: <HomePage />,
			},
			{
				path: "home",
				element: <HomePage />,
			},
			{
				path: "about",
				element: <AboutPage />,
			},
			{
				path: "services",
				element: <ServicesPage />,
			},
			{
				path: "contact",
				element: <ContactPage />,
			},
		],
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
