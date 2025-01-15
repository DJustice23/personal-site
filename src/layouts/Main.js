import React from "react";
import PropTypes from "prop-types";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Analytics from "../components/Template/Analytics";
import Navigation from "../components/Template/Navigation";
import SideBar from "../components/Template/SideBar";
import ScrollToTop from "../components/Template/ScrollToTop";

const Main = ({ title, description, children, fullPage }) => (
  <HelmetProvider>
    <Analytics />
    <ScrollToTop />
    <Helmet
      titleTemplate="%s | David Justice"
      defaultTitle="David Justice"
      defer={false}
    >
      {title && <title>{title}</title>}
      <meta name="description" content={description} />
    </Helmet>
    <div id="wrapper">
      <Navigation />
      <div id="main">{children}</div>
      {fullPage ? null : <SideBar />}
    </div>
  </HelmetProvider>
);

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  fullPage: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
};

Main.defaultProps = {
  children: null,
  fullPage: false,
  title: null,
  description: "David Justice's personal website.",
};

export default Main;
