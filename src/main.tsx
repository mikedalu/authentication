import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "react-toastify/dist/ReactToastify.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Login from "./pages/Login.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Register from "./pages/Register.tsx";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./context/AuthContext.tsx";
import ProtectedRoutes from "./pages/ProtectedRoutes.tsx";
const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<>
				<ToastContainer position="top-right" />
				<AuthProvider>
					<App />
				</AuthProvider>
			</>
		),
		children: [
			{ path: "/", element: <Home /> },
			{ path: "/login", element: <Login /> },
			{ element: <ProtectedRoutes />, children: [{ path: "/dashboard", element: <Dashboard /> }] },
			{ path: "/register", element: <Register /> },
		],
	},
]);
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
