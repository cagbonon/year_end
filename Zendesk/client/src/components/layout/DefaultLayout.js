import React from "react";
import { Footer } from "./partials/Footer_comp";
import { Header } from "./partials/Header_comp";

export const DefaultLayout = ({children , tabRoute}) => {
    return (
        <div className="default-layout">
        <header className="header mb-2">
        <Header tabRoute={tabRoute || []} />

        </header>
        <main className="main">{children}</main>
        <footer className="footer">
            <Footer />
        </footer>
        </div>
    );
}