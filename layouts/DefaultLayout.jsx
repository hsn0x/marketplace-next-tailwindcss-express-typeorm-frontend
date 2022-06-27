import React from "react";
import { Footer, Navbar } from "../components";

const DefaultLayout = ({ children }) => {
    return (
        <>
            <div className="container mx-auto">
                <Navbar />
                <main>{children}</main>
                <Footer />
            </div>
        </>
    );
};

export default DefaultLayout;
