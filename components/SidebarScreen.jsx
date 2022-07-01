import { Navbar, Sidebar } from "flowbite-react";
import Link from "next/link";
import React, { useEffect } from "react";
import {
    FaArrowRight,
    FaBook,
    FaChartPie,
    FaInbox,
    FaShoppingBag,
    FaStore,
    FaTable,
    FaUser,
    FaArrowLeft,
    FaHome,
} from "react-icons/fa";
import { v4 as uuid } from "uuid";
import { fetchProfile, signOut } from "../redux/reducers/auth";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { withSessionSsr } from "../lib/withSession";

const SidebarScreen = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const auth = useSelector(({ auth }) => auth);

    const handelSignout = async (e) => {
        e.preventDefault();
        await dispatch(signOut());
        router.push("/auth/login");
    };
    const sidebarNavigationsAuth = [
        {
            id: uuid(),
            icon: FaChartPie,
            label: "Dashboard",
            slug: "dashboard",
            href: "/dashboard",
            hrefMethod: () => router.push("/dashboard"),
            active: false,
            show: true,
            children: [],
            method: null,
        },
        {
            id: uuid(),
            icon: FaInbox,
            label: "Inbox",
            slug: "inbox",
            href: "/inbox",
            hrefMethod: () => router.push("/inbox"),
            active: false,
            show: true,
            children: [],
            method: null,
        },
        {
            id: uuid(),
            icon: FaUser,
            label: "Profile",
            slug: "profile",
            href: "/profile",
            hrefMethod: () => router.push("/profile"),
            active: false,
            show: true,
            children: [],
            method: null,
        },
        {
            id: uuid(),
            icon: FaShoppingBag,
            label: "Cart",
            slug: "cart",
            href: "/cart",
            hrefMethod: () => router.push("/cart"),
            active: false,
            show: true,
            children: [],
            method: null,
        },
        {
            id: uuid(),
            icon: FaArrowLeft,
            label: "Sign Out",
            slug: "auth-logout",
            href: "/logout",
            hrefMethod: () => router.push("/auth/logout"),
            active: false,
            show: true,
            children: [],
            method: (e) => handelSignout(e),
        },
    ];
    const sidebarNavigationsGuest = [
        {
            id: uuid(),
            icon: FaArrowRight,
            label: "Sign In",
            slug: "auth-login",
            href: "/auth/login",
            hrefMethod: () => router.push("/auth/login"),
            active: false,
            show: true,
            children: [],
        },
        {
            id: uuid(),
            icon: FaTable,
            label: "Sign Up",
            slug: "auth-register",
            href: "/auth/register",
            hrefMethod: () => router.push("/auth/register"),
            active: false,
            show: true,
            children: [],
            method: null,
        },
    ];
    const sidebarNavigationsStores = [
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
    const sidebarNavigationsProducts = [
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
                    label: "Create Product",
                    slug: "products-create",
                    href: "/products/create",
                    hrefMethod: () => router.push("/products/create"),
                    active: false,
                    show: true,
                    children: [],
                    method: null,
                },
                {
                    id: uuid(),
                    icon: FaStore,
                    label: "Edit Product",
                    slug: "products-edit",
                    href: "/products/edit",
                    hrefMethod: () => router.push("/products/edit"),
                    active: false,
                    show: true,
                    children: [],
                    method: null,
                },
                {
                    id: uuid(),
                    icon: FaStore,
                    label: "Delete Product",
                    slug: "products-delete",
                    href: "/products/delete",
                    hrefMethod: () => router.push("/products/delete"),
                    active: false,
                    show: true,
                    children: [],
                    method: null,
                },
            ],
            method: null,
        },
    ];
    const sidebarNavigationsMedia = [
        {
            id: uuid(),
            icon: FaStore,
            label: "Media",
            slug: "media",
            href: "/media",
            hrefMethod: () => router.push("/media"),
            active: false,
            show: true,
            children: [
                {
                    id: uuid(),
                    icon: FaStore,
                    label: "All Medias",
                    slug: "media-index",
                    href: "/media",
                    hrefMethod: () => router.push("/media"),
                    active: false,
                    show: true,
                    children: [],
                    method: null,
                },
                {
                    id: uuid(),
                    icon: FaStore,
                    label: "Create Media",
                    slug: "media-create",
                    href: "/media/create",
                    hrefMethod: () => router.push("/media/create"),
                    active: false,
                    show: true,
                    children: [],
                    method: null,
                },
                {
                    id: uuid(),
                    icon: FaStore,
                    label: "Edit Media",
                    slug: "media-edit",
                    href: "/media/edit",
                    hrefMethod: () => router.push("/media/edit"),
                    active: false,
                    show: true,
                    children: [],
                    method: null,
                },
                {
                    id: uuid(),
                    icon: FaStore,
                    label: "Delete Product",
                    slug: "media-delete",
                    href: "/media/delete",
                    hrefMethod: () => router.push("/media/delete"),
                    active: false,
                    show: true,
                    children: [],
                    method: null,
                },
            ],
            method: null,
        },
    ];
    const sidebarNavigationsMembers = [
        {
            id: uuid(),
            icon: FaStore,
            label: "Member",
            slug: "members",
            href: "/members",
            hrefMethod: () => router.push("/members"),
            active: false,
            show: true,
            children: [
                {
                    id: uuid(),
                    icon: FaStore,
                    label: "All Members",
                    slug: "members-index",
                    href: "/members",
                    hrefMethod: () => router.push("/members"),
                    active: false,
                    show: true,
                    children: [],
                    method: null,
                },
                {
                    id: uuid(),
                    icon: FaStore,
                    label: "Me",
                    slug: "members-me",
                    href: "/members/create",
                    hrefMethod: () => router.push("/members/me"),
                    active: false,
                    show: true,
                    children: [],
                    method: null,
                },
                {
                    id: uuid(),
                    icon: FaStore,
                    label: "Create Member",
                    slug: "members-create",
                    href: "/members/create",
                    hrefMethod: () => router.push("/members/create"),
                    active: false,
                    show: true,
                    children: [],
                    method: null,
                },
                {
                    id: uuid(),
                    icon: FaStore,
                    label: "Edit Member",
                    slug: "members-edit",
                    href: "/members/edit",
                    hrefMethod: () => router.push("/members/edit"),
                    active: false,
                    show: true,
                    children: [],
                    method: null,
                },
                {
                    id: uuid(),
                    icon: FaStore,
                    label: "Delete Member",
                    slug: "members-delete",
                    href: "/members/delete",
                    hrefMethod: () => router.push("/members/delete"),
                    active: false,
                    show: true,
                    children: [],
                    method: null,
                },
            ],
            method: null,
        },
    ];
    const sidebarNavigationsAdmin = [
        {
            id: uuid(),
            icon: FaStore,
            label: "Admin",
            slug: "admin",
            href: "/admin",
            hrefMethod: () => router.push("/admin"),
            active: false,
            show: true,
            children: [
                {
                    id: uuid(),
                    icon: FaStore,
                    label: "Admin Home",
                    slug: "admin-index",
                    href: "/admin",
                    hrefMethod: () => router.push("/admin"),
                    active: false,
                    show: true,
                    children: [],
                    method: null,
                },
                {
                    id: uuid(),
                    icon: FaStore,
                    label: "Categories",
                    slug: "admin-categories",
                    href: "/admin/categories",
                    hrefMethod: () => router.push("/admin/categories"),
                    active: false,
                    show: true,
                    children: [],
                    method: null,
                },
            ],
            method: null,
        },
    ];
    const sidebarNavigations = [
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
    const sidebarNavigationsAuthStoresSlug = [
        "stores-create",
        "stores-edit",
        "stores-delete",
    ];
    const sidebarNavigationsAuthProductsSlug = [
        "products-create",
        "products-edit",
        "products-delete",
    ];
    const sidebarNavigationsAuthSlug = [
        "media",
        "dashboard",
        "profile",
        "auth-logout",
        "inbox",
        "cart",
        ...sidebarNavigationsAuthStoresSlug,
        ...sidebarNavigationsAuthProductsSlug,
    ];
    const sidebarNavigationsGuestSlug = ["auth-login", "auth-register"];

    const handelSidebarNavigations = (navss) =>
        navss.map((nav) => {
            if (nav.children.length > 0) {
                return {
                    ...nav,
                    children: [...handelSidebarNavigations(nav.children)],
                };
            } else {
                if (
                    auth.user &&
                    sidebarNavigationsGuestSlug.includes(nav.slug)
                ) {
                    return {
                        ...nav,
                        show: false,
                    };
                } else if (
                    !auth.user &&
                    sidebarNavigationsAuthSlug.includes(nav.slug)
                ) {
                    return {
                        ...nav,
                        show: false,
                    };
                } else {
                    return {
                        ...nav,
                    };
                }
            }
        });

    const isHandelSidebarNavigations =
        handelSidebarNavigations(sidebarNavigations);

    // if (auth.user) {
    //     sidebarNavigations
    //         .filter((nav) => sidebarNavigationsGuestSlug.includes(nav.slug))
    //         .forEach((nav) => (nav.show = false));
    // } else {
    //     sidebarNavigations
    //         .filter((nav) => sidebarNavigationsAuthSlug.includes(nav.slug))
    //         .forEach((nav) => (nav.show = false));
    // }

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
                            <div>
                                {nav.show ? (
                                    <Sidebar.Item
                                        icon={nav.icon}
                                        active={nav.active}
                                        style={{ cursor: "pointer" }}
                                        onClick={(e) => [
                                            nav.method != null
                                                ? nav.method(e)
                                                : nav.hrefMethod(),
                                        ]}
                                    >
                                        {nav.label}
                                    </Sidebar.Item>
                                ) : (
                                    ""
                                )}
                            </div>
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
                        <ShowSidebarNavigations
                            navs={isHandelSidebarNavigations}
                        />
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
        </div>
    );
};

export default SidebarScreen;
