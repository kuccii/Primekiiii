import React from "react";

import Layout from "@layout/Layout";
import Navbar from "@layout/Header/Navbar";
import FooterShort from "@layout/Footer/FooterShort";
import SingleServiceRegister from "@components/services/SingleServiceRegister";

const RequestDemo = () => {
  return (
    <Layout
      title="Request a QSource Network Walkthrough"
      desc="Talk to the Qivook team about how QSource Network can support your agricultural trade operations, from sourcing to payments."
    >
      <Navbar navDark />
      {/* This page is intentionally simple: we direct users to contact and in-app experience */}
      <section className="ptb-120 bg-dark text-white">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="mb-3">Request a QSource Network Walkthrough</h1>
              <p className="lead mb-4">
                For serious trade teams, we offer focused sessions to show how QSource Network supports your sourcing, verification, deal pipeline, and documentation flows.
              </p>
              <p className="mb-4">
                Use the contact page to share details about your business and trade volumes, or create a free account in the app and our team will follow up based on your profile.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <a href="/contact-us" className="btn btn-primary">
                  Contact Qivook Team
                </a>
                <a
                  href="https://app.qivook.com"
                  className="btn btn-outline-light"
                >
                  Access QSource Network
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterShort />
    </Layout>
  );
};

export default RequestDemo;
