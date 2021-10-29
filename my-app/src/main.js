import { createApp } from 'vue';
import App from './App.vue';
import Router from '@/router';

// components
// import '@/plugins/global-components'

// 전역으로 등록할 컴포넌트를 import 합니다.
import Content from '@/components/Content'
import Header from '@/components/Header'
import Container from '@/components/Container'
import Navigation from '@/components/Navigation'
import FloatingBar from '@/components/FloatingBar'
import Block from '@/components/Block'
import Box from '@/components/Box'
import TextInput from '@/components/TextInput'
import Button from '@/components/Button'
import Txt from '@/components/Text'

// 에디트 컴포넌트 & css
import { QuillEditor } from '@vueup/vue-quill'
// import BlotFormatter from 'quill-blot-formatter'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import '@vueup/vue-quill/dist/vue-quill.bubble.css';

// const globalOptions = {
//     debug: 'info',
//     modules: {
//         toolbar: ['bold', 'italic', 'underline']
//     },
//     placeholder: 'Compose an epic...',
//     // readOnly: true,
//     theme: 'snow'
// }

// export default defineComponent({
//     components: {
//         QuillEditor,
//     },
//     setup: () => {
//         const modules = {
//             name: 'blotFormatter',  
//             module: BlotFormatter, 
//             options: {/* options */}
//         }
//         return { modules }
//     },
// })

// style
import '@/assets/styles/index.css';

const app = createApp(App);
// app.use(Router);
// app.mount("#app");

// 컴포넌트를 등록합니다.
// app.component(사용 시 호출할 이름, 등록할 컴포넌트)
app.component('Content', Content);
app.component('Header', Header);
app.component('Container', Container);
app.component('Navigation', Navigation);
app.component('FloatingBar', FloatingBar);
app.component('Block', Block);
app.component('Box', Box);
app.component('TextInput', TextInput);
app.component('Button', Button);
app.component('Txt', Txt);

// set default globalOptions prop
// QuillEditor.props.globalOptions.default = () => globalOptions
// register QuillEditor component
app.component('QuillEditor', QuillEditor)

app.use(Router).mount('#app');