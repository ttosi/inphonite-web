import { networkService as network } from '@/services'

const canDelete = (props) => ({
  async delete(obj) {
    console.log("delete from behavior", obj)
    return new Promise(async (resolve, reject) => {
      const res = await network
        .post(`${props.controller}${props.routes.delete}`, obj)
        .catch(err => reject(err))
      resolve(res)
    });
  }
});

const canDeleteMany = (props) => ({
  async deleteMany(objs) {
    console.log("deletemany from behavior", objs)
    return new Promise(async (resolve, reject) => {
      const res = await network
        .post(`${props.controller}${props.routes.deleteMany}`, objs)
        .catch(err => reject(err))
      resolve(res)
    });
  }
});

export { canDelete, canDeleteMany }