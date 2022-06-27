import { Navbar, Sidebar } from "flowbite-react";
import Link from "next/link";
import React from "react";
import {
    FaArrowRight,
    FaBook,
    FaChartPie,
    FaInbox,
    FaShoppingBag,
    FaStore,
    FaTable,
    FaUser,
} from "react-icons/fa";
import { v4 as uuid } from "uuid";

const SidebarScreen = () => {
    const sidebarNavigations = [
        {
            id: uuid(),
            icon: FaChartPie,
            label: "Dashboard",
            href: "/dashboard",
            active: true,
            children: [],
        },
        {
            id: uuid(),
            icon: FaStore,
            label: "Stores",
            href: "/stores",
            active: false,
            children: [
                {
                    id: uuid(),
                    icon: FaStore,
                    label: "All Stores",
                    href: "/stores",
                    active: false,
                    children: [],
                },
                {
                    id: uuid(),
                    icon: FaStore,
                    label: "Create Store",
                    href: "/stores/create",
                    active: false,
                    children: [],
                },
            ],
        },
        {
            id: uuid(),
            icon: FaStore,
            label: "Product",
            href: "/products",
            active: false,
            children: [
                {
                    id: uuid(),
                    icon: FaStore,
                    label: "All Products",
                    href: "/products",
                    active: false,
                    children: [],
                },
                {
                    id: uuid(),
                    icon: FaStore,
                    label: "Create Product",
                    href: "/products/create",
                    active: false,
                    children: [],
                },
            ],
        },
        {
            id: uuid(),
            icon: FaInbox,
            label: "Inbox",
            href: "/inbox",
            active: false,
            children: [],
        },
        {
            id: uuid(),
            icon: FaUser,
            label: "Profile",
            href: "/profile",
            active: false,
            children: [],
        },
        {
            id: uuid(),
            icon: FaShoppingBag,
            label: "Cart",
            href: "/cart",
            active: false,
            children: [],
        },
        {
            id: uuid(),
            icon: FaArrowRight,
            label: "Sign In",
            href: "/auth/login",
            active: false,
            children: [],
        },
        {
            id: uuid(),
            icon: FaTable,
            label: "Sign Up",
            href: "/auth/register",
            active: false,
            children: [],
        },
    ];

    const ShowSidebarNavigations = ({ navs, navsParent }) => {
        return (
            <div>
                {navs.map((nav, index) => (
                    <div key={nav.id}>
                        {nav.children.length > 0 ? (
                            <Sidebar.Collapse icon={nav.icon} label={nav.label}>
                                <ShowSidebarNavigations
                                    navs={nav.children}
                                    navsParent={nav}
                                />
                            </Sidebar.Collapse>
                        ) : (
                            <Sidebar.Item
                                icon={nav.icon}
                                active={nav.active}
                                href={nav.href}
                            >
                                {nav.label}
                            </Sidebar.Item>
                        )}
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="w-fit bg-gray-50">
            <Sidebar aria-label="Sidebar with multi-level dropdown example">
                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        <ShowSidebarNavigations navs={sidebarNavigations} />
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
        </div>
    );
};

export default SidebarScreen;
