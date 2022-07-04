import { FaHome } from "react-icons/fa";
import { v4 as uuid } from "uuid";
import { sidebarNavigationsAdmin } from "./sidebarNavigationsAdmin";
import { sidebarNavigationsAuth } from "./sidebarNavigationsAuth";
import { sidebarNavigationsGuest } from "./sidebarNavigationsGuest";
import { sidebarNavigationsMedia } from "./sidebarNavigationsMedia";
import { sidebarNavigationsMembers } from "./sidebarNavigationsMembers";
import { sidebarNavigationsProducts } from "./sidebarNavigationsProducts";
import { sidebarNavigationsStores } from "./sidebarNavigationsStores";

export const sidebarNavigations = [
    {
        id: uuid(),
        icon: FaHome,
        label: "Home",
        slug: "",
        href: "/",
        hrefMethod: () => router.push("/"),
        active: true,
        show: true,
        children: [],
        method: null,
    },
    ...sidebarNavigationsAdmin,
    ...sidebarNavigationsStores,
    ...sidebarNavigationsProducts,
    ...sidebarNavigationsMembers,
    ...sidebarNavigationsMedia,
    ...sidebarNavigationsAuth,
    ...sidebarNavigationsGuest,
    ,
];
