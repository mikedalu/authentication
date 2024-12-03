import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext, IUser } from "../context/AuthContext";
import { axiosInstance } from "../axiosInstance";
const Dashboard: React.FC = () => {
	const { user } = useContext(AuthContext);

	const [users, setUsers] = useState<IUser[]>([{ email: "", userName: "" }]);
	const fetchUsers = async () => {
		const response = await axiosInstance.get("/users");

		const data = response.data;
		setUsers(data.data);
	};

	useEffect(() => {
		fetchUsers();
	}, []);

	return (
		<div className="max-w-3xl mx-auto shadow-xl rounded-xl p-10">
			<h1>Dashboard</h1>
			<p>Welcome, {user?.userName}</p>
			<p>email: {user?.email}</p>

			<div>
				<h4>USERS</h4>

				{users.map((user, index) => {
					return (
						<div className={"flex items-center gap-3"} key={index}>
							<p>{user.userName}</p>
							<p>{user.email}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Dashboard;
