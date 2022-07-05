import { FaStore } from "react-icons/fa";
import { v4 as uuid } from "uuid";

export const sidebarNavigationsStores = [
    {
        id: uuid(),
        icon: FaStore,
        label: "Stores",
        slug: "stores",
        href: "/stores",
        hrefMethod: () => router.push("/stores"),
        active: false,
        show: true,
        children: [
            {
                id: uuid(),
                icon: FaStore,
                label: "All Stores",
                slug: "stores-index",
                href: "/stores",
                hrefMethod: () => router.push("/stores"),
                active: false,
                show: true,
                children: [],
                method: null,
            },
            {
                id: uuid(),
                icon: FaStore,
                label: "My Stores",
                slug: "stores-my",
                href: "/stores/my",
                hrefMethod: () => router.push("/stores/my"),
                active: false,
                show: true,
                children: [],
                method: null,
            },
            {
                id: uuid(),
                icon: FaStore,
                label: "Create Store",
                slug: "stores-create",
                href: "/stores/create",
                hrefMethod: () => router.push("/stores/create"),
                active: false,
                show: true,
                children: [],
                method: null,
            },
        ],
        method: null,
    },
];
