import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => (
  <div className="layout">
    <Header className="mb-4"/>
        {children}
    <Footer />
  </div>
);

export default Layout;