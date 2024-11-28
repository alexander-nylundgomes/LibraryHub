import type { User } from "./user";

export interface UserStore{
	activeUser: User | null
}