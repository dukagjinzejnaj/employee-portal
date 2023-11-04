import { createRouter , createWebHistory } from 'vue-router'
import Home from '../pages/home.vue'
import Team from '../pages/team.vue'
import Rules from '../pages/rules.vue'
import Jobs from '../pages/jobs.vue'
import News from '../pages/news.vue'
import Absence from '../pages/absence.vue'
import Service from '../pages/service-desk.vue'

/* Router */
const routes = [
    { path: '/employee-portal/', component: Home },
    { path: '/employee-portal/team/', component: Team },
    { path: '/employee-portal/rules/', component: Rules },
    { path: '/employee-portal/jobs/', component: Jobs },
    { path: '/employee-portal/news/', component: News },
    { path: '/employee-portal/absence/', component: Absence },
    { path: '/employee-portal/service-desk/', component: Service }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router