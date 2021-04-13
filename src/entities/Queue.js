import { canList, canComplete, canSend } from './behaviors'
import deliveryStatus from '@/data/deliveryStatus'

const Queue = () => {
  const props = {
    type: 'Rule',
    controller: '/queue',
    routes: {
      list: '/all',
      complete: 'complete/:id',
      sendnow: 'snednow/:id'
    },
  }

  const canListQueue = () => ({
    async listQueue() {
      const queue = await this.list();
      return new Promise(resolve => {
        const q = queue.map(q => {
          return { ...q, deliveryStatus: deliveryStatus.find(d => d.id == q.deliveryStatusId).value }
        })
        resolve(q);
      })
    }
  })

  return Object.assign(
    props,
    canList(props),
    canListQueue(props),
    canComplete(props),
    canSend(props)
  );
}

export { Queue }

