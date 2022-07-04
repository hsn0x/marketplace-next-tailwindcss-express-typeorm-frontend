import { Avatar, Dropdown, Navbar } from "flowbite-react";
import React, { useEffect } from "react";
import Link from "next/link";
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
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
import { fetchProfile, signOut } from "../redux/reducers/auth";
import {
    navbarNavigations,
    navbarNavigationsAuthSlug,
    navbarNavigationsGuestSlug,
} from "../constants/navbar";

const NavbarScreen = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const auth = useSelector(({ auth }) => auth);

    const handelNavbarNavigations = (navss) =>
        navss.map((nav) => {
            if (nav.children.length > 0) {
                return {
                    ...nav,
                    children: [...handelNavbarNavigations(nav.children)],
                };
            } else {
                if (
                    auth.user &&
                    navbarNavigationsGuestSlug.includes(nav.slug)
                ) {
                    return {
                        ...nav,
                        show: false,
                    };
                } else if (
                    !auth.user &&
                    navbarNavigationsAuthSlug.includes(nav.slug)
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
    const isHandelNavbarNavigations =
        handelNavbarNavigations(navbarNavigations);

    const handelSignout = async (e) => {
        e.preventDefault();
        await dispatch(signOut());
        router.push("/auth/login");
    };
    const handelProfile = async (e) => {
        e.preventDefault();
        router.push(`/members/username/${auth.profile?.username}`);
    };

    useEffect(() => {
        if (auth.user && auth.isAuthenticated && !auth.profile) {
            dispatch(fetchProfile());
        }
    }, [auth.user, dispatch, auth.isAuthenticated, auth.profile]);

    return (
        <Navbar fluid={true} rounded={true}>
            <Navbar.Brand href="https://flowbite.com/">
                <img
                    src="https://flowbite.com/docs/images/logo.svg"
                    className="mr-3 h-6 sm:h-9"
                    alt="Flowbite Logo"
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Marketplace
                </span>
            </Navbar.Brand>
            <div className="flex md:order-2 z-10">
                <Dropdown
                    arrowIcon={false}
                    inline={true}
                    label={
                        <Avatar
                            alt="User settings"
                            img={auth.profile?.avatars[0].url}
                            rounded={true}
                            size="md"
                        />
                    }
                >
                    <Dropdown.Header>
                        <span className="block text-sm">
                            {auth.profile?.firstName} {auth.profile?.lastName}
                        </span>
                        <span className="block truncate text-sm font-medium">
                            {auth.profile?.email}
                        </span>
                    </Dropdown.Header>
                    {}

                    {isHandelNavbarNavigations.map(
                        (nav, index) =>
                            nav.place == "right" && (
                                <div key={nav.id}>
                                    {nav.slug == "auth-logout" && (
                                        <Dropdown.Divider />
                                    )}

                                    <Link href={nav.href} passHref>
                                        <span>
                                            <Dropdown.Item
                                                icon={nav.icon}
                                                active={nav.active}
                                                style={{
                                                    cursor: "pointer",
                                                }}
                                                onClick={(e) => [
                                                    nav.slug == "auth-logout" &&
                                                        handelSignout(e),
                                                    nav.slug == "profile" &&
                                                        handelProfile(e),
                                                ]}
                                            >
                                                {nav.label}
                                            </Dropdown.Item>
                                        </span>
                                    </Link>
                                </div>
                            )
                    )}
                </Dropdown>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                {isHandelNavbarNavigations.map(
                    ({ label, href, place, id }) =>
                        place == "top" && (
                            <Link key={id} href={href}>
                                {label}
                            </Link>
                        )
                )}
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavbarScreen;
