import store from '@/store.js'
import router from '@/router.js'
import { authService as auth } from '@/services'
import { eventBus } from '../main';

export const networkService = {
  apiUrl() {
    return store.getters.baseApiUrl;
  },
  headers() {
    let headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
    if (store.getters.isAuthenticated) {
      headers['authorization'] =
        `User token="${store.getters.userToken}" selectedAccountId="${store.getters.accountId}"`
    }
    return headers;
  },
  get(url) {
    eventBus.$emit('is-loading', true);

    if (!url.startsWith('/')) { url = `/${url}`; }
    return new Promise((resolve, reject) => {
      fetch(`${this.apiUrl()}${url}`, {
        method: 'GET',
        headers: this.headers()
      })
        .then(this.handleStatusCode)
        .then(res => { return res.json(); })
        .then(data => { resolve(data); })
        .catch(err => { reject(err); })
        .finally(() => { eventBus.$emit('is-loading', false); });
    });
  },
  post(url, body) {
    eventBus.$emit('is-loading', true);

    if (!url.startsWith('/')) { url = `/${url}`; }
    return new Promise((resolve, reject) => {
      fetch(`${this.apiUrl()}${url}`, {
        method: 'POST',
        headers: this.headers(),
        body: JSON.stringify(body)
      })
        .then(this.handleStatusCode)
        .then(res => { return res.json(); })
        .then(data => { resolve(data); })
        .catch(err => { console.log(err); reject(err); })
        .finally(() => { eventBus.$emit('is-loading', false); });
    });
  },
  download(url) {
    window.open(`${this.apiUrl()}${url}`);
  },
  handleStatusCode(res) {
    switch (res.status) {
      case 400:
        throw new Error('Bad Request');
      case 401:
        auth.logout().then(() => {
          router.push({ path: '/login' })
        });
      case 404:
        throw new Error('Endpoint not found (404)');
      default:
        return res;
    }
  }
};