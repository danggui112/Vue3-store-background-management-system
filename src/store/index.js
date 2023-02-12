import { createStore } from 'vuex'
import number from './state/num.state'
export default createStore({

  //数据多，分模块
  modules: {
    number
  }
})

