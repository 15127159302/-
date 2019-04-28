import Vue from 'vue'
import Router from 'vue-router'
import ElementUI, { Header } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


// 路由懒加载
const  HelloWorld = resolve => require(['@/components/HelloWorld'], resolve)
const  Antd = resolve => require(['@/components/Antd'], resolve)
const  Sant = resolve => require(['@/fen/Sant'], resolve)
const  Sans = resolve => require(['@/fen/dataadministration/Sans'], resolve)
const  Sank = resolve => require(['@/fen/dataadministration/Sank'], resolve)
const  Sanj = resolve => require(['@/fen/dataadministration/Sanj'], resolve)
const  Sanp = resolve => require(['@/fen/dataadministration/Sanp'], resolve)
const  Sanl = resolve => require(['@/fen/dataadministration/Sanl'], resolve)
const  Kank = resolve => require(['@/fen/adddata/Kank'], resolve)
const  Kans = resolve => require(['@/fen/adddata/Kans'], resolve)
const  chart = resolve => require(['@/fen/chart/Chart'], resolve)
const  compile = resolve => require(['@/fen/compile/Compile'], resolve)
const  set = resolve => require(['@/fen/set/Set'], resolve)
const  explain = resolve => require(['@/fen/explain/explain'], resolve)

Vue.use(ElementUI);

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Antd',
      component: Antd
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[
        {
          path: '/Sant',
          name: 'Sant',
          component: Sant
        },
        {
          path: '/Sans',
          name: 'Sans',
          component: Sans
        },
        {
          path: '/Sank',
          name: 'Sank',
          component: Sank
        },
        {
          path: '/Sanj',
          name: 'Sanj',
          component: Sanj
        },
        {
          path: '/Sanp',
          name: 'Sanp',
          component: Sanp
        },
        {
          path: '/Sanl',
          name: 'Sanl',
          component: Sanl
        },
        {
          path: '/Kank',
          name: 'Kank',
          component: Kank
        },
        {
          path: '/Kans',
          name: 'Kans',
          component: Kans
        },
        {
          path: '/chart',
          name: 'chart',
          component: chart
        },
        {
          path: '/compile',
          name: 'compile',
          component: compile
        },
        {
          path: '/set',
          name: 'set',
          component: set
        },
        {
          path: '/explain',
          name: 'explain',
          component: explain
        },
        
      ],
      redirect:"/Sant"
    },
    
  ]
})
