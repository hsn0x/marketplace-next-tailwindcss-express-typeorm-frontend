import { FaStore } from "react-icons/fa";
import { v4 as uuid } from "uuid";

export const sidebarNavigationsProducts = [
    {
        id: uuid(),
        icon: FaStore,
        label: "Product",
        slug: "products",
        href: "/products",
        hrefMethod: () => router.push("/products"),
        active: false,
        show: true,
        children: [
            {
                id: uuid(),
                icon: FaStore,
                label: "All Products",
                slug: "products-index",
                href: "/products",
                hrefMethod: () => router.push("/products"),
                active: false,
                show: true,
                children: [],
                method: null,
            },
            {
                id: uuid(),
                icon: FaStore,
                label: "My Products",
                slug: "products-my",
                href: "/products/my",
                hrefMethod: () => router.push("/products/my"),
                active: false,
                show: true,
                children: [],
                method: null,
            },
            {
                id: uuid(),
                icon: FaStore,
                label: "Create Product",
                slug: "products-create",
                href: "/products/create",
                hrefMethod: () => router.push("/products/create"),
                active: false,
                show: true,
                children: [],
                method: null,
            },
        ],
        method: null,
    },
];
