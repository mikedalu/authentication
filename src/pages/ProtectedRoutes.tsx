import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { Outlet, useNavigate } from "react-router-dom";
function ProtectedRoutes() {
	const navigate = useNavigate();
	const { isAuthenticated } = useContext(AuthContext);

	useEffect(() => {
		if (!isAuthenticated) {
			navigate("/login");
		}
	}, []);

	return <Outlet />;
}

export default ProtectedRoutes;
