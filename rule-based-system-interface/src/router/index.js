import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = r => require.ensure([], () => r(require('@/page/login')), 'login');
const manage = r => require.ensure([], () => r(require('@/page/manage')), 'manage');
const home = r => require.ensure([], () => r(require('@/page/home')), 'home');
const ruleTechs = r => require.ensure([], () => r(require('@/page/ruleTechs')), 'ruleTechs');
const ruleSelection = r => require.ensure([], () => r(require('@/page/ruleSelection')), 'ruleSelection');
const adminList = r => require.ensure([], () => r(require('@/page/adminList')), 'adminList');
const visitor = r => require.ensure([], () => r(require('@/page/visitor')), 'visitor');
const newMember = r => require.ensure([], () => r(require('@/page/newMember')), 'newMember');
const withMissing = r => require.ensure([], () => r(require('@/page/withMissing')), 'withMissing');
const noMissing = r => require.ensure([], () => r(require('@/page/noMissing')), 'noMissing');
const adminSet = r => require.ensure([], () => r(require('@/page/adminSet')), 'adminSet');

const routes = [
	{
		path: '/',
		component: login
	},
	{
		path: '/manage',
		component: manage,
		name: '',
		children: [{
			path: '',
			component: home,
			meta: [],
		},{
			path: '/ruleTechs',
			component: ruleTechs,
			meta: ['Rule set Manage', 'Rule Learning Techniques'],
		},{
			path: '/ruleSelection',
			component: ruleSelection,
			meta: ['Rule set Manage', 'Rule Selection'],
		},{
			path: '/withMissing',
			component: withMissing,
			meta: ['Prediction', 'with Missing values'],
		},{
			path: '/noMissing',
			component: noMissing,
			meta: ['Prediction', 'with no Missing values'],
		}]
	}
]

export default new Router({
	routes,
	strict: process.env.NODE_ENV !== 'production',
})
