import { canGet, canUpdate, canDelete, canDeleteMany } from './behaviors'
import { networkService as network } from '@/services'
import notifyResult from '@/data/notifyResult'

const Appointment = () => {
  const props = {
    type: 'Appointment',
    controller: '/appt',
    routes: {
      list: '/all?dateTicks=',
      listByPersonId: '/contact',
      get: '/',
      update: '/update',
      delete: '/delete'
    },
  }

  // override default list() behavior because dateticks
  // TODO: is there a better way to do this so it's not completely
  // TODO: overriding the canList default behavior?
  const canList = (props) => ({
    async list(dateticks) {
      return new Promise(async (resolve, reject) => {
        const appointments = await network
          .get(`${props.controller}${props.routes.list}${dateticks}`)
          .catch(err => reject(err));

        const appts = appointments.items.map(a => {
          // BUG: ? notifyResultTypeId always returns with
          // BUG: id of 75 whereas desktop app does not
          return {
            ...a,
            timeApptStart: a.apptStart,
            notifyResult: `[${notifyResult.find(n => n.id == a.notifyResultTypeId).value}]`
          }
        });
        resolve(appts);
      })
    }
  });

  const canListByPersonId = (props) => ({
    async listByPersonId(id) {
      return new Promise(async (resolve, reject) => {
        const appts = await network
          .get(`${props.controller}${props.routes.listByPersonId}/${id}`)
          .catch(err => reject(err));

        if (!appts || !appts.hasOwnProperty('items')) resolve([]);
        resolve(appts.items);
      });
    }
  });

  return Object.assign(
    props,
    canList(props),
    canListByPersonId(props),
    canGet(props),
    canUpdate(props),
    canDelete(props),
    canDeleteMany(props)
  );
}

export { Appointment }

