import { v4 as uuid } from "uuid";
import { sidebarNavigationsAuthProductsSlug } from "./sidebarNavigationsProductsAuthSlug";
import { sidebarNavigationsAuthStoresSlug } from "./sidebarNavigationsAuthStoresSlug";

export const sidebarNavigationsAuthSlug = [
    "media",
    "dashboard",
    "profile",
    "auth-logout",
    "inbox",
    "cart",
    ...sidebarNavigationsAuthStoresSlug,
    ...sidebarNavigationsAuthProductsSlug,
];
