import React, { createContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
export interface IUser {
	email: string;
	userName: string;
}
//authentication context type
interface IAuthContext {
	user: IUser | null;
	login: (userData: IUser, token: string) => void;
	logout: () => void;
	isAuthenticated: boolean;
}

export const AuthContext = createContext<IAuthContext>({
	user: null,
	isAuthenticated: false,
	login: () => {},
	logout: () => {},
});

interface IAuthProviderProps {
	children: React.ReactNode;
}

export const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
	const navigate = useNavigate();
	const [user, setUser] = useState<IUser | null>(() => {
		const storedUser = localStorage.getItem("user");
		return storedUser ? JSON.parse(storedUser) : null;
	});

	const login = (userData: IUser, token: string) => {
		localStorage.setItem("user", JSON.stringify(userData));
		localStorage.setItem("token", JSON.stringify(token));
		setUser(userData);
	};

	const logout = () => {
		setUser(null);
		localStorage.removeItem("user");
		localStorage.removeItem("token");
		navigate("/login");
	};

	const isAuthenticated = user ? true : false;

	const memoisedValue = useMemo(() => {
		return {
			user,
			login,
			logout,
			isAuthenticated,
		};
	}, [user, isAuthenticated]);

	return <AuthContext.Provider value={memoisedValue}>{children}</AuthContext.Provider>;
};
