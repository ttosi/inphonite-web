import { 
  canList,
  canCreate,
  canGet,
  canUpdate,
  canDelete,
  canDeleteMany,
  canClear,
  canRefresh,
  canEnqueue
} from './behaviors'

const Person = () => {
  const props = {
    type: 'Person',
    controller: '/contacts',
    routes: {
      list: '/all',
      get: '/',
      update: '/update',
      delete: '/delete',
      deleteMany: '/tableDelete',
      clear: '/clear'
    },
  }

  return Object.assign(
    props,
    canList(props),
    canCreate(props),
    canGet(props),
    canUpdate(props),
    canDelete(props),
    canDeleteMany(props),
    canClear(props),
    canRefresh(props),
    canEnqueue(props)
  );
}

export { Person }

