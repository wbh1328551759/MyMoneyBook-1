import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';

Vue.config.productionTip = false;

Vue.component('Nav', Nav);
Vue.component('Layout', Layout);
Vue.component('Icon', Icon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

window.onload = function () {
  setTimeout(function () {
    window.scrollTo(0, 200);
  }, 0);
};

if (document.documentElement.clientWidth > 500) {
  window.alert('请使用手机打开本页面，以保证预览效果！');
  const app = document.getElementById('app');
  const img = document.createElement('img');
  const p = document.createElement('p');
  if (app) {
    app.style.outline = '1px solid';
  }

  img.src = './qrcode.png';
  img.style.position = 'fixed';
  img.style.left = '50%';
  img.style.top = '50%';
  img.style.transform = 'translate(-50%,-50%)';
  img.style.boxShadow = '0 0 10px rgba(0,0,0,0.45)';
  p.textContent = '点击关闭二维码';
  p.style.fontSize='20px';
  p.style.color = 'red';
  p.style.fontWeight = 'bold';
  p.style.position = 'fixed';
  p.style.left = '50%';
  p.style.top = '30%';
  p.style.transform = 'translate(-50%,-50%)';
  document.body.appendChild(img);
  document.body.appendChild(p);
  img.addEventListener('click', () => {
    img.style.display = 'none';
    p.style.display = 'none';
  });
  p.addEventListener('click', () => {
    img.style.display = 'none';
    p.style.display = 'none';
  });
}

