/**
 * Created by Administrator on 2017/12/19/019.
 */
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
