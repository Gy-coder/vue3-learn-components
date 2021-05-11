import {createRouter, createWebHashHistory} from 'vue-router';
// @ts-ignore
import Home from './views/Home.vue'
// @ts-ignore
import Doc  from './views/Doc.vue'
// @ts-ignore
import SwitchPage from './components/SwitchPage.vue'
// @ts-ignore
import ButtonPage from './components/ButtonPage.vue'
// @ts-ignore
import DialogPage from './components/DialogPage.vue'
// @ts-ignore
import TabsPage from './components/TabsPage.vue'
// @ts-ignore
import DocDemo from './components/DocDemo.vue'
const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    {path: '/', component: Home},
    {path:'/doc',component:Doc,children:[
        {
          path:'',
          component: DocDemo
        },
        {
          path: 'switch',
          component: SwitchPage,
        },
        {
          path: 'button',
          component: ButtonPage,
        },
        {
          path: 'dialog',
          component: DialogPage,
        },
        {
          path: 'tabs',
          component: TabsPage,
        },
      ]}
  ]
});

export default router