import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { useVisitorStore } from "@/stores/VisitorStore";
import { usePostStore } from "@/stores/PostStore";

const routes = [
	{
		path: "/",
		name: "home",
		component: () => import("@/views/FeedView.vue"),
		alias: "/home"
	},
	{
		path: "/login",
		name: "login",
		component: () => import("@/views/LogInView.vue"),
		beforeEnter: (to: any, from: any, next: any) => {
			if (useVisitorStore().loggedIn) next({ path: "/home" });
			else next();
		}
	},
	{
		path: "/feed",
		name: "feed",
		// route level code-splitting
		// this generates a separate chunk (About.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import("@/views/FeedView.vue")
	},
	{
		path: "/post/:id",
		name: "post",
		component: () => import("@/views/PostView.vue"),
		beforeEnter: (to, from, next) => {
			if (usePostStore().postExists(to.params.id)) next();
			else next({ path: "/home" });
		}
	},
	{
		path: "/profile/:id",
		name: "profile",
		component: () => import("@/views/ProfileView.vue"),
	}
];

const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes: routes
});

router.beforeEach((to, from, next) => {
	if (useVisitorStore().loggedIn) {
		if (to.name !== "login") next();
		else next({ name: "home" });
	} else {
		if (to.name === "login") next();
		else next({ name: "login" });
	}
});

export default router;
