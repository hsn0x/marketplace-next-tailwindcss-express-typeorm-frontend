import React from "react";
import { FooterScreen, NavbarScreen } from "../components";

const DefaultLayout = ({ children }) => {
    return (
        <>
            <div className="container mx-auto">
                <NavbarScreen />
                <main>{children}</main>
                <FooterScreen />
            </div>
        </>
    );
};

export default DefaultLayout;
