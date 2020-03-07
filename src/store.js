import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    login_user: {
      name: "生田絵梨花",
      schoolYear: 21,
      age: 23,
      img: "./assets/images/ikuta.jpg",
      major: "経済学部"
    }
  },
  mutations: {
    sideNavMutation(state){
      state.drawer = !state.drawer
    }
  },
  actions: {
    sideNavAction(context){
      context.commit("sideNavMutation");
    }
  }
})
