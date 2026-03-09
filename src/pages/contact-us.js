import React from 'react';
import Layout from '@layout/Layout';
import Footer from '@layout/Footer/Footer';
import Navbar from '@layout/Header/Navbar';
import PageHeader from '@components/common/PageHeader';
import ContactCard from '@components/contact-us/ContactCard';
import ContactForm from '@components/contact-us/ContactForm';

const ContactUs = () => {
  return (
    <Layout
      title="Contact QSource Network"
      desc="Get in touch with the QSource Network team for platform support, partnerships, and enterprise trade opportunities."
    >
      <Navbar classOption="navbar-light" />
      <PageHeader
        title="Contact Us"
        desc="Please feel free to reach out to us with any questions, inquiries, or partnership opportunities. We are here to assist you and look forward to hearing from you."
      />
      <ContactCard />
      <ContactForm />
      <Footer />
    </Layout>
  );
};

export default ContactUs;
