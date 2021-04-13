import { canList, canCreate, canGet, canUpdate, canDelete } from './behaviors'

const  Rule = () => {
  const props = {
    type: 'Rule',
    controller: '/rules',
    routes: {
      list: '/getrulelist',
      get: '/',
      update: '/update',
      delete: '/delete'
    },
  }

  return Object.assign(
    props, 
    canList(props),
    canCreate(props),
    canGet(props),
    canUpdate(props),
    canDelete(props),
  );
}

export { Rule }

