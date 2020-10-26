import { TaskResult } from "../models/TaskResult";
import { Users } from "../models/Users";
const TOKEN_KEY = "TOKEN_KEY";
const URL = "http://jhonasv-001-site1.ctempurl.com/api/v1";

const Login = async (user: Users) => {
  let response = await fetch(
    `${URL}/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(
        { userName: user.userName, password: user.password },
      ),
    },
  );
  let data = await response.json();
  let result: TaskResult<string> = data;
  return result;
};

const Register = async (user: Users) => {
  let response = await fetch(
    `${URL}/auth/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(
        { userName: user.userName, password: user.password },
      ),
    },
  );
  let data = await response.json();
  let result: TaskResult<string> = data;
  return result;
};

const SaveToken = (token: string) => localStorage.setItem(TOKEN_KEY, token);

const TokenExists = () => localStorage.getItem(TOKEN_KEY) !== null;

const GetToken = () => localStorage.getItem(TOKEN_KEY);

const RemoveToken = () => localStorage.removeItem(TOKEN_KEY);

const CurrentUser = async () => {
  let response = await fetch(`${URL}/auth/current`, {
    headers: { "Authorization": `Bearer  ${GetToken()}` },
  });
  let data = await response.json();

  if (response.ok) {
    let result: TaskResult<Users> = data;
    return result;
  }
  RemoveToken();
  return null;
};

const logOut = () => RemoveToken();

export default {
  Login,
  Register,
  logOut,
  SaveToken,
  TokenExists,
  GetToken,
  RemoveToken,
  CurrentUser,
};
