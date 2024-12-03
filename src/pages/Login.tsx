import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { loginSchema } from "../validator";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { AuthContext, IUser } from "../context/AuthContext";
import { axiosInstance } from "../axiosInstance";

type LoginForm = z.infer<typeof loginSchema>;

const Login: React.FC = () => {
	const { login } = useContext(AuthContext);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<LoginForm>({ resolver: zodResolver(loginSchema), mode: "onSubmit" });
	const navigate = useNavigate();

	const onSubmit = async (data: LoginForm) => {
		console.log(data);
		const response = await axiosInstance.post("/login", { email: data.email, password: data.password });
		if (response.status === 200) {
			toast.success("Login successful");
			const userData: IUser = { email: response.data.data.user.email, userName: response.data.data.user.name };
			const token = response.data.data.accessToken;
			login(userData, token);
			reset();
			navigate("/dashboard");
		}
	};
	return (
		<div className="mx-auto w-full px-20">
			<h2 className="text-center font-bold text-3xl mb-10">Login to your Account</h2>
			<form action="" className="w-full md:w-96 mx-auto" onSubmit={handleSubmit(onSubmit)}>
				{/* <CustomInput label={"email"} {...register("email")} /> */}
				<div className="mb-4">
					<label className="block mb-3">EnterEmail</label>
					<input
						// type="email"
						className="p-3 focus:ring-1 focus:ring-blue-500 outline-none border border-yellow-500"
						{...register("email")}
					/>
				</div>
				{errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}

				{/* <CustomInput label={"password"} type="password" {...register("password")} /> */}
				<div className="mb-4">
					<label className="block mb-3">Enter password</label>
					<input
						type={"password"}
						className="p-3 focus:ring-1 focus:ring-blue-500 outline-none border border-yellow-500"
						{...register("password")}
					/>
				</div>
				{errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}

				<button type="submit" className="w-full bg-red-500 rounded-md p-3 text-white my-4 hover:scale-110 transition-all">
					Signin
				</button>
			</form>
		</div>
	);
};

export default Login;
