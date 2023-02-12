import { createStore } from 'vuex'
import number from './state/num.state'
import uInfo from './state/userinfo.state'
export default createStore({

  //数据多，分模块
  modules: {
    number,
    uInfo
  }
})

