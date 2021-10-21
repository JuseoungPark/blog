import { createRouter, createWebHistory } from "vue-router";

// import Home from "@/views/Home";
// import NotFound from "@/views/NotFound";

// route 정보
const routes = [
    {
        path: "/:catchAll(.*)",
        // component: NotFound,
        component: () => import("@/views/NotFound"),
    },
    {
        path: "/",
        name: "Home",
        // component: Home,
        component: () => import("@/views/Home"),
    },
    {
        path: "/write",
        name: "Write",
        component: () => import("@/views/WritePage"),
    },
    {
        path: "/post",
        name: "Post",
        component: () => import("@/views/Post"),
    },
];

// Vue 라우터 인스턴스 생성
const router = createRouter({
    history: createWebHistory(), //2.x대를 설치하면 작동을 안함. npm i vue-router@next --save 해줘야 함.
    routes,
});

export default router;