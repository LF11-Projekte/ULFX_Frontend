import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { useVisitorStore } from "@/stores/VisitorStore";

const routes = [
	{
		path: "/",
		name: "home",
		component: HomeView,
		alias: "/home"
	},
	{
		path: "/login",
		name: "login",
		component: () => import("@/views/LogInView.vue")
	},
	{
		path: "/feed",
		name: "feed",
		component: () => import("@/views/FeedView.vue")
	}
	/*{
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/AboutView.vue")
  }*/
];

const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes: routes
});

router.beforeEach((to, from, next) => {
	const store = useVisitorStore();
	store.$hydrate({ runHooks: false });
	const loggedIn = store.loggedIn;

	if (loggedIn) {
		if (to.name !== "login") next();
		else next({ name: "home" });
	} else {
		if (to.name === "login") next();
		else next({ name: "login" });
	}
});

export default router;
