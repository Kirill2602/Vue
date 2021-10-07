import Vue from "vue";
import Router from 'vue-router';
import paymentList from '../components/v-paymentList-component'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/Food/:value',
            name: 'Food',
            component: paymentList,
        },
        {
            path: '/Transport/:value',
            name: 'Transport',
            component: paymentList,
        },
        {
            path: '/Entertainment/:value',
            name: 'Entertainment',
            component: paymentList,
        },
    ],
})
