import React from "react";
import Head from "next/head";

const Layout = ({ children, title, desc, hasClass, classOpt }) => {
  return (
    <div
      className={`main-wrapper ${
        hasClass ? "overflow-hidden" : ""
      } ${classOpt}`}
    >
      <Head>
        <title>
          {title
            ? `Qivook - QSource Network (QSN) | ${title}`
            : "Qivook - QSource Network (QSN) Platform"}
        </title>
        {desc && <meta name="description" content={desc} />}
        <link rel="icon" href="/favicon.png" />
      </Head>

      {children}
    </div>
  );
};

export default Layout;
