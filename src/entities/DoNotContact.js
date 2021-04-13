import { canList, canGet } from './behaviors'

const  DoNotContact = () => {
  const props = {
    type: 'DoNotContact',
    controller: '/dnc',
    routes: {
      list: '/all',
      post: '/save',
      delete: '/delete'
    },
  }

  return Object.assign(
    props, 
    canList(props),
    canGet(props)
  );
}

export { DoNotContact }

