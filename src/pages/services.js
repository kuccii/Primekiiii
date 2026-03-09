import React from "react";

import Layout from "@layout/Layout";
import Footer from "@layout/Footer/Footer";
import Navbar from "@layout/Header/Navbar";
import PageHeader from "@components/common/PageHeader";
import ServiceOne from "@components/services/ServiceOne";
import SupportOne from "@components/support/SupportOne";
import TestimonialTwo from "@components/testimonial/TestimonialTwo";

const services = () => {
  return (
    <Layout
      title="Services"
      desc="Explore QSource Network services for agricultural suppliers, buyers, logistics providers, and customs brokers across Africa."
    >
      <Navbar classOption="navbar-light" />
      <PageHeader
        title="What QSource Network Offers"
        desc="Discover services designed to help you find trusted partners, understand markets, and execute cross-border agricultural trade with confidence."
      />

      <ServiceOne />
      {/* <TestimonialTwo sectionBgClass="bg-white" swiperBgClass="bg-white" /> */}
      <SupportOne className="true" />
      <Footer footerLight />
    </Layout>
  );
};

export default services;
