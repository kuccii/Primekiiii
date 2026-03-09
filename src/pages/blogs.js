import React from 'react';

import Layout from '@layout/Layout';
import Footer from '@layout/Footer/Footer';
import Navbar from '@layout/Header/Navbar';
import BlogFeature from '@components/blogs/BlogFeature';
import PageHeader from '@components/common/PageHeader';

const Blogs = () => {
  return (
    <Layout
      title="Insights & Updates"
      desc="QSource Network by Qivook — insights on African agricultural trade, market intelligence, and building serious cross-border deal pipelines."
    >
      <Navbar />
      <PageHeader
        title="QSource Network Insights"
        desc="Articles and updates on African agricultural markets, verified trade networks, logistics, and how to run serious cross-border deals with QSource Network."
        blogtags
      />
      <BlogFeature />
      <Footer />
    </Layout>
  );
};

export default Blogs;
