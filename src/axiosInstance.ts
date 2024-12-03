import axios from "axios";

// const token: string = JSON.parse(localStorage.getItem("token") ? localStorage.getItem("token") : "null");

const token = localStorage.getItem("token") || null;
const finalToken = token ? JSON.parse(token) : null;

console.log("token from axiosin", token);
export const axiosInstance = axios.create({
	baseURL: "http://localhost:4000",
	headers: {
		"Content-Type": "application/json",
		Authorization: `Bearer ${finalToken}`,
	},
});
