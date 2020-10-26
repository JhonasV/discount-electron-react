import AuthService from "../services/AuthService";
import { IMenuItem } from "../models/MenuItems";

let LogInMenuItems: IMenuItem[] = [
  {
    "title": "Historial",
    "icon": "fas fa-history",
    "pathname": "/history",
    "access": ["admin"],
  },

  {
    "title": "Calcular",
    "icon": "fas fa-calculator",
    "pathname": "/",
    "access": ["applicant"],
  },
  {
    "title": "Salir",
    "icon": "fas fa-sign-in-alt",
    "pathname": "/login",
    "access": ["applicant", "admin"],
    "onClick": () => {
      AuthService.logOut();
      window.location.reload();
    },
  },
];

let LogOutMenuItems: IMenuItem[] = [
  {
    "title": "Login",
    "icon": "fas fa-sign-in-alt",
    "pathname": "/",
  },
  {
    "title": "Registro",
    "icon": "fas fa-user-alt",
    "pathname": "/register",
  },
];

export default { LogInMenuItems, LogOutMenuItems };
