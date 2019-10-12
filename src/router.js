import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const originalPush = Router.prototype.push;
const Login = () => import("./views/login/login");
const Main = () => import("./views/Main");
const Home = () => import("./views/Home");
const User = () => import("./views/User");
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: '/login'
    },
    {
      path: "/login",
      name: "login",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Login,
      meta: {
        title: "登录"
      }
    },
    {
      path: "/main",
      component: Main,
      children: [{
        path: "home",
        component: Home,
        meta: {
          title: "首页"
        }
      },
        {
          path: "user",
          component: User,
          meta: {
            title: "用户页"
          }

        }]
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }

  ]
});
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
})
export default router;
　

