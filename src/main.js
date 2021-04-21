import Vue from 'vue'
import App from './App.vue'
import {initRouter} from './router'
import './theme/index.less'
import Antd from 'ant-design-vue'
import Viser from 'viser-vue'
import '@/mock'
import store from './store'
import 'animate.css/source/animate.css'
import Plugins from '@/plugins'
import {initI18n} from '@/utils/i18n'
import bootstrap from '@/bootstrap'
import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')

Vue.prototype.$moment = moment;
const router = initRouter(store.state.setting.asyncRoutes)
const i18n = initI18n('CN')
// 处理：路由懒加载会偶发出现Loading chunk-xxx failed
router.onError((error) => {
  const pattern = /Loading chunk (\d)+ failed/g;
  const isChunkLoadFailed = error.message.match(pattern);
  console.log(isChunkLoadFailed,'/Loading chunk (\d)+ failed/g','路由懒加载找不到对应的moudle')
  if (isChunkLoadFailed) {
    window.location.reload();
  }else{
    console.log(error)
  }
});
Vue.use(Antd)
Vue.config.productionTip = false
Vue.use(Viser)
Vue.use(Plugins)
//注入全局属性$message的配置
Vue.prototype.$message.config({
    duration: 2,// 持续时间
    top:`300px`, // 到页面顶部距离
    maxCount: 1 // 最大显示数, 超过限制时，最早的消息会被自动关闭
  })
bootstrap({ router, store, i18n, message: Vue.prototype.$message })

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
