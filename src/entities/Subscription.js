import { canList } from './behaviors'

const Subscription = () => {
  const props = {
    type: 'Subscription',
    controller: '/reportsubs',
    routes: {
      list: '/all',
      get: '/',
      update: '/update',
      delete: '/delete'
    }
  };

  return Object.assign(
    props,
    canList(props)
  );
};

export { Subscription }

