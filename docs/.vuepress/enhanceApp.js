/**
 * 扩展 VuePress 应用
 */
import VueHighlightJS from 'vue-highlight.js';
import 'highlight.js/styles/atom-one-dark.css';
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//import VueECharts from 'vue-echarts' //注册图表

import VueResource from 'vue-resource'

// import axios from 'axios'

import '../.vuepress/public/css/index.css'


// function renderValine(router) {
//   // 重新渲染 评论区
//   router.afterEach((to, from) => {
//     let $page = document.querySelector('.page')
//     let vcomments = document.getElementById('vcomments')
//     if(!vcomments){
//       vcomments = document.createElement('div')
//       vcomments.id = 'vcomments'
//       // vcomments.style.margin = '1em 4em 0 4em'
//       vcomments.style.maxWidth = '740px'
//       vcomments.style.display = 'block'
//       vcomments.style.padding = '10px'
//       vcomments.style.marginLeft = 'auto'
//       vcomments.style.marginRight = 'auto'
//     }
//     if ($page && !vcomments && $page.frontmatter.comments){
//       $page.appendChild(vcomments)
//       console.log("ss")
//     }else{
//       // 获取不到vuepress的page加载完成时的钩子，只能采用笨方法
//       setTimeout(()=>{
//         $page = document.querySelector('.page')
//         $page.appendChild(vcomments)
//         valine()
//       }, 500)
//     }
//     valine()
//   })
// }
// function valine() {
//   const Valine = require('valine')
//   const leancloudStorage = require('leancloud-storage')
//   // require window 
//   if (typeof window !== 'undefined') {
//     window.AV = leancloudStorage
//   }
//   // 初始化valine
//   new Valine({
//     el: '#vcomments' ,
//     appId: 'piM1Wm7mzq4fsj7RfCCJ7slE-gzGzoHsz',
//     appKey: 'vdSq43byXijVSfd0Y5qY0vf8',
//     notify:false, // 邮件提醒 
//     verify:false, // 验证码
//     avatar:'mm', 
//     placeholder: '说点什么吧',
//     path: window.location.pathname // 虽然默认就是这个，但是不加会导致不重新加载评论
//   });
// }


export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData,// 站点元数据
}) => {
  // ...做一些其他的应用级别的优化
  //Vue.prototype.$axioshttp = axios;
  Vue.use(VueHighlightJS)
  Vue.use(Element)
  Vue.use(VueResource)
  // Vue.use(axios)
  //Vue.component('chart', VueECharts)

  // try {
  //   // 生成静态页时在node中执行，没有document对象
  //   document && renderValine(router)
  // } catch (e) {
  //   console.error(e.message)
  // }
}