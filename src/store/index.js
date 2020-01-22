import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        //当前城市
        city: '',
        //城市列表
        cities: [],
        loading: false,
        hotPlace: ''
    },
    mutations: {},
    actions: {},
    getters: {},
    modules: {}
})