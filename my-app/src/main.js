import { createApp } from 'vue';
import App from './App.vue';
import Router from '@/router';

// components
// import '@/plugins/global-components'

// 전역으로 등록할 컴포넌트를 import 합니다.
import Header from '@/components/Header'
import Container from '@/components/Container'
import Block from '@/components/Block'
import Box from '@/components/Box'
import Button from '@/components/Button'
import Txt from '@/components/Text'

// style
import '@/assets/scss/index.css';

const app = createApp(App);
// app.use(Router);
// app.mount("#app");

// 컴포넌트를 등록합니다.
// app.component(사용 시 호출할 이름, 등록할 컴포넌트)
app.component('Header', Header);
app.component('Container', Container);
app.component('Block', Block);
app.component('Box', Box);
app.component('Button', Button);
app.component('Txt', Txt);

app.use(Router).mount('#app');