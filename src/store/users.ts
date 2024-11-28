import type { UserStore } from "@/interfaces/users-store";
import axios from "axios";
import { defineStore } from "pinia";

export const useUserStore = defineStore('users', {
	state: (): UserStore => ({
		activeUser: null
	}),
	getters: {

	},
	actions: {
		async fetchActiveUser(){
			try {
				this.activeUser = (await axios.get('/example-data/users/active-user.json')).data
			} catch (error) {
				
			}
		}
	},
})