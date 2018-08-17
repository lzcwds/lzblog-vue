/**
 * Created by dy on 2018/8/17.
 *
 */
import api from './ajax'

const API = {
  getlist:()=>(api.get(`/article/getlist`)),
}

export default API;