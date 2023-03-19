import { defineStore } from 'pinia'


export const useAccountStore = defineStore('account', {
    state: () => {
      return {
        token: '',
        user: {},
        loggedIn: false,
      }
    },
    getters: {
      headers() {
        return { 'headers': { 'Authorization': 'Bearer ' + this.token } }
      }
    },
    actions: {
      setUser(user){
        this.user = user
        this.loggedIn = true
      },
      logout() {
        this.user = {}
        this.token = ""
        this.loggedIn = false
      }
    }
  })