import VueRouter from 'vue-router';
import { routes } from "./routes"

const router = new VueRouter({ routes });

router.beforeEach((to, from_, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (localStorage.getItem("token")) {
            next();
        } else {
            next("/login");
        }
    } else {
        next();
    }
});

export default router;