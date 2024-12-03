import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
const Header: React.FC = () => {
	const { isAuthenticated, logout } = useContext(AuthContext);

	return (
		<nav className="flex items-center justify-between p-8 shadow-xl border-b my-10">
			<div className="logo">Logo</div>
			<div className="w-1/2 flex gap-x-8 items-center  justify-around  py-2">
				<NavLink
					className={({ isActive }) =>
						isActive
							? "bg-red-500 text-white  px-4 py-2 rounded-lg"
							: "hover:bg-red-500 px-4 py-2 rounded-lg hover:text-white transition-all ease-out duration-500"
					}
					to="/">
					Home
				</NavLink>

				{isAuthenticated ? (
					<button onClick={() => logout()} className="px-4 py-2 bg-red-500 text-white rounded-full">
						logout
					</button>
				) : (
					<>
						<NavLink
							className={({ isActive }) =>
								isActive
									? "bg-red-500 text-white  px-4 py-2 rounded-lg"
									: "hover:bg-red-500 px-4 py-2 rounded-lg hover:text-white transition-all ease-out duration-500"
							}
							to="/Login">
							Login
						</NavLink>
						<NavLink
							className={({ isActive }) =>
								isActive
									? "bg-red-500 text-white  px-4 py-2 rounded-lg"
									: "hover:bg-red-500 px-4 py-2 rounded-lg hover:text-white transition-all ease-out duration-500"
							}
							to="/register">
							SignUp
						</NavLink>
					</>
				)}
			</div>
		</nav>
	);
};

export default Header;
