import { networkService as network } from '@/services'

const canList = (props) => ({
  async list() {
    console.log("---> LIST <---")
    return new Promise(async (resolve, reject) => {
      const data = await network.get(`${props.controller}${props.routes.list}`)
        .catch(err => reject(err))

      if (!data || !data.hasOwnProperty('items')) {
        resolve([]);
        return;
      };
      
      resolve(data.items)
    });
  }
});

export { canList }