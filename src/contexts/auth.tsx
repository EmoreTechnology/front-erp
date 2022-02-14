import { api } from "../services/api";
import { IFormData } from "./auth.model";

const signup = ({ identifier, password }: IFormData) => {
	return api
		.post("/signup", {
			identifier,
			password,
		})
		.then((response) => {
			if (response.data.accessToken) {
				localStorage.setItem("@token:erp", JSON.stringify(response.data));
			}

			return response.data;
		});
};

const login = ({ identifier, password }: IFormData) => {
	return api
		.post("auth/local", {
			identifier,
			password,
		})
		.then((response) => {
			if (response.data.jwt) {
				localStorage.setItem("@token:erp", JSON.stringify(response.data));
			}

			return response.data;
		});
};

const logout = () => {
	localStorage.removeItem("@token:erp");
};

const getCurrentUser = () => {
	return JSON.parse(String(localStorage.getItem("@token:erp")));
};

const authService = {
	signup,
	login,
	logout,
	getCurrentUser,
};

export default authService;