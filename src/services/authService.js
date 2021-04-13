import { networkService as network } from '@/services';
import store from '@/store.js';
import VueCookie from 'vue-cookie';

export const authService = {
  login(username, password) {
    return new Promise((resolve, reject) => {
      network.get(`/auth/weblogin?username=${username}&password=${password}`)
        .then(res => {
          if (!res.success) {
            reject(res.message)
            return
          };

          VueCookie.set('authenticated', 'true', 1);
          localStorage.setItem('user', JSON.stringify(res));
          
          store.commit('setUser', { ...res });
          store.commit('setAuthentication', {
            isAuthenticated: true,
            token: res.token,
            accountId: res.accountId
          });
          resolve(true);
        }).catch(err => {
          reject(err);
        })
    })
  },
  logout() {
    console.log('logout')
    return new Promise((resolve) => {
      store.commit('setAuthentication', {
        isAuthenticated: false,
        token: null,
        accountId: null
      });
      VueCookie.delete('authenticated');
      localStorage.removeItem('user');
      resolve(true);
    });
  },
  setAuthenticated() {
    // TODO: move duplicated code here (setting auth in
    // TODO: router and login)
  }
}