const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/home", component: () => import("pages/LandingPage.vue") },
      { path: "/aboutus", component: () => import("pages/AboutUs.vue") },
      { path: "/contactus", component: () => import("pages/ContactUs.vue") },
      { path: "/ourimpact", component: () => import("pages/OurImpact.vue") },

    ],
  },
];

export default routes;
