import { networkService as network } from '@/services'

const canEnqueue = (props) => ({
  async enqueue() {
    return new Promise(async (resolve, reject) => {
      resolve("ENQUEUE -- Not implemented.")
    });
  }
});

export { canEnqueue }