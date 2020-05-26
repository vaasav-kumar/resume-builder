import Vue from 'vue'
import Router from 'vue-router'

import ResumeBuilder from '../pages/ResumeBuilder'
import Preview from '../pages/Preview'


Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'ResumeBuilder', component: ResumeBuilder, meta: { title: 'Resume Builder' } },
    { path: 'templates', name: 'Templates', component: Preview, meta: { title: 'Resume - Templates' } },
    { path: 'preview', name: 'Preview', component: Preview, meta: { title: 'Resume - Preview' } }
  ]
})

export default router
