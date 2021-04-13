import { networkService as network } from '@/services'

const canSend = (props) => ({
  async send() {
    return new Promise(async (resolve, reject) => {
      // const data = await network.get(`${props.controller}${props.routes.list}`)
      //   .catch(err => reject(err))
      resolve(true)
    });
  }
});

export { canSend }