import registrations from './modules/registrations'
import families from './modules/families'
import goods from './modules/goods'
import date from './modules/date'

export default {
  ...registrations,
  ...families,
  ...goods,
  ...date
}
