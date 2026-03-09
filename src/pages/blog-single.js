import React from 'react';
import Layout from '@layout/Layout';
import Footer from '@layout/Footer/Footer';
import Navbar from '@layout/Header/Navbar';
import NewsLetter from '@components/cta/NewsLetter';
import LatestBlog from '@components/blogs/LatestBlog';
import PageHeader from '@components/common/PageHeader';
import SupportOne from '@components/support/SupportOne';
import BlogSingleFeature from '@components/blogs/BlogSingleFeature';


const BlogSingle = () => {
  return (
    <Layout
      title="Case Study: Running Serious Agricultural Deals"
      desc="A practical look at how suppliers, buyers, and logistics partners use QSource Network to run structured, traceable agricultural trade deals across Africa."
    >
      <Navbar classOption="navbar-light" />
      <PageHeader
        title="How Serious Agricultural Deals Actually Run on QSource Network"
      />
      <BlogSingleFeature />
      <NewsLetter />
      <LatestBlog />
      <SupportOne className />
      <Footer footerLight />
    </Layout>
  );
};

export default BlogSingle;
