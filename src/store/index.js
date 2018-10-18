import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'
//方便看开发日志
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
	actions,
	getters,
	state,
	mutations,
	strict:debug,
	plugins:debug ? [createLogger()] : []
})