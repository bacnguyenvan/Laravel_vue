import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// import home from './components/home';
import index from './views/customer/index.vue';
import show from './views/customer/show.vue';

const routes = [
	{ path : '/admin/customer', component: index},
	{ path : '/admin/customer/show', component: show}
];

export default new VueRouter({
	routes
})