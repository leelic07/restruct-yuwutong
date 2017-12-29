/**
 * Created by Administrator on 2017/12/19/019.
 */
import registrations from './modules/registrations'
import families from './modules/families'

let filters = new Object();

filters = Object.assign(filters,registrations,families);

export default filters;
