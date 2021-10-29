import { createApp } from 'vue';
import App from '@/App';

// 전역으로 등록할 컴포넌트를 import 합니다.
import Button from '@/components/Button';


const app = createApp(App);

// 컴포넌트를 등록합니다.
// app.component(사용 시 호출할 이름, 등록할 컴포넌트)
app.component('Button', Button);