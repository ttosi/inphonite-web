import { networkService as network } from '@/services'

const canUpdate = (props) => ({
  async update(obj) {
    return new Promise(async (resolve, reject) => {
      const res = await network
        .post(`${props.controller}${props.routes.update}`, obj)
        .catch(err => reject(err))
      resolve(res)
    });
  }
});

export { canUpdate }