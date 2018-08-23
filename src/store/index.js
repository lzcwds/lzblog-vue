/**
 * Created by dy on 2018/8/16.
 *
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state ={
  count:1
}

export default new Vuex.Store({
  state,
})