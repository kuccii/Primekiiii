import React from "react";
import Layout from "@layout/Layout";
import Navbar from "@layout/Header/Navbar";
import Footer from "@layout/Footer/Footer";
import PageHeader from "@components/common/PageHeader";
import Link from "next/link";

const Pricing = () => {
  return (
    <Layout
      title="Pricing"
      desc="Manage your subscription and pricing directly inside the QSource Network app."
    >
      <Navbar classOption="navbar-light" />
      <PageHeader
        title="Pricing is Managed Inside QSource Network"
        desc="To keep things secure and personalized, all subscription plans and billing are handled inside the QSource Network app."
      />
      <section className="ptb-120">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <p className="lead mb-4">
                If you already have an account, sign in to the app to view or change your plan. New users can access QSource Network from the button below.
              </p>
              <Link href="https://app.qivook.com">
                <a className="btn btn-primary btn-lg">Access QSource Network</a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Layout>
  );
};

export default Pricing;
