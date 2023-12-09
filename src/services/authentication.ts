import { API_URL } from "@env";
import axios from "axios";

import { LoginUser, RegisterUser, User } from "@models/index";

const baseUrl = API_URL;

export async function registerUser(user: RegisterUser) {
  const url = baseUrl + "/register";

  try {
    await axios.post(url, user);
  } catch (error) {
    console.error("Error while registering user", error);
  }
}

export async function loginUser(user: LoginUser): Promise<User | null> {
  const url = baseUrl + "/login";

  let loggedUser = null;

  try {
    const { data } = await axios.post(url, user);

    loggedUser = data;
  } catch (error) {
    console.error("Error while logging user", error);
  }

  return loggedUser;
}
