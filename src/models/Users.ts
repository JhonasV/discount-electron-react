import { Roles } from "./Roles";

export interface Users {
  id?: number;
  userName: string;
  password: string;
  roles?: [Roles];
}
