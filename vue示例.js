/**
 * Created by haywair on 2018/4/12.
 */
export default new Router({
    routes:[
        {
            path:'/goods',
            name:'GoodsList',
            component:GoodsList,
            children:[
                {
                    path:'title',
                    name:'Title',
                    component:Title,

                },
                {
                    path:'image',
                    name:'Image',
                    component:Image
                }
            ]
        }
    ]
});


@别名：映射到src目录

export default new Router({
    mode:'history',//另外参数：hash
    routes:[
        {
            path:'/goods/:goodsId/user/:username',
            name:'GoodsList',//对应模板中的文件名
            component:GoodsList//对应import引入的命名
        }
    ]
});

命名路由和命名视图
路由：
import GoodsList from './../views/GoodsList'
import Title from '@/views/Title'
import Image from '@/views/Image'
import Cart from '@/views/Cart'


Vue.use(Router)
export default new Router({
    routes:[
        {
            path:'/',
            name:'GoodsList',
            components:{
                default:GoodsList,
                title:Title,
                img:Image
            }
        },
        {
            path:'/cart/:cartId',
            name:'cart',
            component:Cart
        }
    ]
})
模板：
<router-view></router-view>//渲染视图
<router-view name="title"></router-view>//渲染命名视图
<router-view name="img"></router-view>//渲染命名视图


vue手动挂载：
new Vue({
    el: '#app',
    template: '<App/>',
    router,
    store,
    components: { App }
// render: h => h(Login)
}).$mount('#app') // $mount('#app') 手动挂载
