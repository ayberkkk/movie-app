import React from "react";
import "../styles/globals.css";
import Header from "@/components/Header";
import Providers from "./Providers";
import Tabs from "@/components/Tabs";
import Head from "./head";

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <Head />
      <body>
        <Providers>
          <Header />
          <Tabs />
          <content>{children}</content>
        </Providers>
      </body>
    </html>
  );
};

export default Layout;
