import React from 'react';
import Layout from '@layout/Layout';
import Footer from '@layout/Footer/Footer';
import Navbar from '@layout/Header/Navbar';
import SupportOne from '@components/support/SupportOne';
import PageHeader from '@components/common/PageHeader';
import IntegrationDetails from '@components/integration/IntegrationDetails';
import RelatedIntegration from '@components/integration/RelatedIntegration';


const IntegrationSingle = () => {
  return (
    <Layout
      title="Example Integration"
      desc="An example of how QSource Network can integrate with third-party tools to support identity, payments, or internal reporting."
    >
      <Navbar />
      <PageHeader
        title="Connecting QSource Network with External Tools"
        desc="Use integrations to connect QSource Network to your identity providers, payment gateways, or internal systems so your team has one consistent view of trade activity."
        integration
      />
      <IntegrationDetails />
      <RelatedIntegration />
      <SupportOne className />
      <Footer footerLight />
    </Layout>
  );
};

export default IntegrationSingle;
