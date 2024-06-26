import Home from "@/views/Home.vue";
import InvoiceView from "@/views/InvoiceView.vue";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/invoice/:invoiceId",
        name: "Invoice",
        component: InvoiceView
    },
];

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes,
});

export default router;