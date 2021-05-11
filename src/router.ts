import {createRouter, createWebHashHistory} from 'vue-router';
// @ts-ignore
import Home from './views/Home.vue'
// @ts-ignore
import Doc  from './views/Doc.vue'
// @ts-ignore
import SwitchPage from './components/SwitchPage.vue'

const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    {path: '/', component: Home},
    {path:'/doc',component:Doc,children:[
        {
          path: 'switch',
          component: SwitchPage,
        },
      ]}
  ]
});

export default router