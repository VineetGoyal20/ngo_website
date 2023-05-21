const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/", component: () => import("pages/LandingPage.vue") },
      { path: "/aboutus", component: () => import("pages/AboutUs.vue") },
      { path: "/contactus", component: () => import("pages/ContactUs.vue") },
    ],
  },
];

export default routes;
