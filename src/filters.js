import Vue from 'vue'

Vue.filter('formatDatetime', val => {
  return Date
    .create(val, { fromUTC: true })
    .format(`{MM}/{dd}/{yyyy} {h}:{mm} {TT}`);
});
Vue.filter('formatDate', val => {
  return Date
    .create(val, { fromUTC: true })
    .format(`{MM}/{dd}/{yyyy}`);
});
Vue.filter('formatTime', val => {
  return Date
    .create(val, { fromUTC: true })
    .format(`{h}:{mm} {TT}`);
});
Vue.filter('formatPhone', val => {
  if (val.length !== 10) return 'Invalid Phone';

  const cleanNumber = ('' + val).replace(/\D/g, '');
  const tokens = cleanNumber.match(/^(\d{3})(\d{3})(\d{4})$/);

  return '(' + tokens[1] + ') ' + tokens[2] + '-' + tokens[3];
});
