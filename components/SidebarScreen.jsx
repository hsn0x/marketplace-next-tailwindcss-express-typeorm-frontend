import { Sidebar } from "flowbite-react";
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

const SidebarScreen = () => {
    const sidebarNavigations = [
        {
            icon: FaChartPie,
            label: "Dashboard",
            href: "/dashboard",
            active: true,
            children: [],
        },
        {
            icon: FaStore,
            label: "Stores",
            href: "/stores",
            active: false,
            children: [
                {
                    icon: FaStore,
                    label: "All Stores",
                    href: "/stores",
                    active: false,
                    children: [],
                },
                {
                    icon: FaStore,
                    label: "Create Store",
                    href: "/stores/create",
                    active: false,
                    children: [],
                },
            ],
        },
        {
            icon: FaStore,
            label: "Product",
            href: "/products",
            active: false,
            children: [
                {
                    icon: FaStore,
                    label: "All Products",
                    href: "/products",
                    active: false,
                    children: [],
                },
                {
                    icon: FaStore,
                    label: "Create Product",
                    href: "/products/create",
                    active: false,
                    children: [],
                },
            ],
        },
        {
            icon: FaInbox,
            label: "Inbox",
            href: "/inbox",
            active: false,
            children: [],
        },
        {
            icon: FaUser,
            label: "Profile",
            href: "/profile",
            active: false,
            children: [],
        },
        {
            icon: FaShoppingBag,
            label: "Cart",
            href: "/cart",
            active: false,
            children: [],
        },
        {
            icon: FaArrowRight,
            label: "Sign In",
            href: "/auth/login",
            active: false,
            children: [],
        },
        {
            icon: FaTable,
            label: "Sign Up",
            href: "/auth/register",
            active: false,
            children: [],
        },
    ];

    const ShowSidebarNavigations = ({ navs, navsParent }) => {
        return (
            <>
                {navs.map((nav, index) => (
                    <>
                        {nav.children.length > 0 ? (
                            <Sidebar.Collapse
                                icon={nav.icon}
                                label={nav.label}
                                active={nav.active}
                            >
                                <Link key={index} href={nav.href} passHref>
                                    <ShowSidebarNavigations
                                        navs={nav.children}
                                        navsParent={nav}
                                    />
                                </Link>
                            </Sidebar.Collapse>
                        ) : (
                            <Link key={index} href={nav.href} passHref>
                                <Sidebar.Item
                                    key={index}
                                    icon={nav.icon}
                                    active={nav.active}
                                    label={navsParent?.label}
                                >
                                    {nav.label}
                                </Sidebar.Item>
                            </Link>
                        )}
                    </>
                ))}
            </>
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
