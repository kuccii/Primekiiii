import React from 'react';

import Layout from '@layout/Layout';
import Footer from '@layout/Footer/Footer';
import Navbar from '@layout/Header/Navbar';
import Promo from '@components/promo/Promo';
import PageHeader from '@components/common/PageHeader';
import SupportOne from '@components/support/SupportOne';
import IntegrationFeature from '@components/integration/IntegrationFeature';


const Integrations = () => {
  return (
    <Layout
      title="Integrations"
      desc="Explore how QSource Network connects with payments, data, and internal tools to support serious agricultural trade operations."
    >
      <Navbar classOption="navbar-light" />
      <PageHeader
        title="Integrations that Support Your Trade Operations"
        desc="QSource Network is designed to work alongside your payment providers, data tools, and internal systems so you can keep running serious agricultural deals without changing everything at once."
      />
      <IntegrationFeature />
      <Promo bgWhite />
      <SupportOne className />
      <Footer footerLight />
    </Layout>
  );
};

export default Integrations;
