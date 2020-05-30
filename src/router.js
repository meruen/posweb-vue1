import VueRouter from 'vue-router';
import { routes } from "./routes"

const router = new VueRouter({ routes });

router.beforeEach((to, from, next) => {
    const is_logged = localStorage.getItem("token");

    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (is_logged) {
            next();
        } else {
            next("/login");
        }
        return;
    }

    if (to.name === 'login' && is_logged) {
        next('/taskgroups')
    } else {
        next();
    }
});

export default router;