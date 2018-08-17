/**
 * Created by dy on 2018/8/17.
 *
 */
import api from './ajax'

export default {
  getlist:()=>(api.get(`/article/getlist`)),
  getById:(data={}) =>(api.get(`/article/getbyid?id=${data.id}`))
}
