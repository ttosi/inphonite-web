import { networkService as network } from '@/services'

const canGet = (props) => ({
  async get(id) {
    return new Promise(async (resolve, reject) => {
      const res = await network
        .get(`${props.controller}${props.routes.get}${id}`)
        .catch(err => reject(err))
      resolve(res)
    });
  }
});

export { canGet }