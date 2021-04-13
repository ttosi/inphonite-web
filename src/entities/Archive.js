import { canList } from './behaviors'

const Archive = () => {
  const props = {
    type: 'Archive',
    controller: '/reports',
    routes: {
      list: '/archive'
    }
  };

  return Object.assign(
    props,
    canList(props)
  );
}

export { Archive }

