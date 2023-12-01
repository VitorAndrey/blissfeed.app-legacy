import axios from "axios";
import { LoginUser, RegisterUser, User } from "@models/index";
import { API_URL } from "@env";

const baseUrl = API_URL;

export async function registerUser(user: RegisterUser) {
  const url = baseUrl + "/register";

  axios.post(url, user);
}

export async function loginUser(user: LoginUser) {
  const url = baseUrl + "/login";

  axios.post(url, user);
}
