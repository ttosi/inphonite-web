import { networkService as network } from '@/services'

const canCreate = (props) => ({
  async create(id) {
    return new Promise(async (resolve, reject) => {
      // const res = await network
      //   .get(`${props.controller}${props.routes.get}${id}`)
      //   .catch(err => reject(err))
      // resolve(res)
      console.log("can create!!!")
      resolve("CREATE -- Not implemented.")
    });
  }
});

export { canCreate }