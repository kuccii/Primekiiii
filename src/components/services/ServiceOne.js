import React from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import {
  HiOutlineCog,
  HiOutlineDocumentReport,
  HiOutlineUsers,
} from "react-icons/hi";
import { SiSimpleanalytics } from "react-icons/si";
import { IoGitCompareOutline } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import SectionTitle from "../common/SectionTitle";

const ServiceOne = ({ bgDark }) => {
  return (
    <section
      className={`feature-section ptb-120 ${bgDark ? "bg-dark" : "bg-light"}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-12 justify-content-center">
            {bgDark ? (
              <SectionTitle
                description="Comprehensive Solutions for"
                title="Our Services"
                subtitlen="Agricultural Trade Success"
                centerAlign
                dark
              />
            ) : (
              <SectionTitle
                subtitle="Our Services"
                title="Comprehensive Solutions for Agricultural Trade"
                description="Everything you need to succeed in cross-border agricultural trade across Africa"
                centerAlign
              />
            )}
            <div className="feature-grid">
              <div
                className={`feature-card shadow-sm rounded-custom p-5 ${
                  bgDark
                    ? "bg-custom-light promo-border-hover border border-2 border-light text-white"
                    : "bg-white"
                }`}
              >
                <div className="icon-box d-inline-block rounded-circle bg-success-soft mb-32">
                  <span className="fal">
                    <HiOutlineDocumentReport className="h3 text-success" />
                  </span>
                </div>
                <div className="feature-content">
                  <h3 className="h5">Market Intelligence</h3>
                  <p className="mb-0">Access real-time agricultural commodity prices, market trends, and demand forecasts across African markets. Make informed trading decisions with comprehensive market analysis and monthly e-magazine insights.</p>
                </div>
                {/* <Link href="">
                  <a className="link-with-icon text-decoration-none mt-3">
                    View Details{" "}
                    <i className="far mb-1">
                      <BsArrowRight />
                    </i>
                  </a>
                </Link> */}
              </div>
              <div
                className={`feature-card shadow-sm rounded-custom p-5 ${
                  bgDark
                    ? "bg-custom-light promo-border-hover border border-2 border-light text-white"
                    : "bg-white"
                }`}
              >
                <div className="icon-box d-inline-block rounded-circle bg-success-soft mb-32">
                  <span className="fal">
                    <HiOutlineDocumentReport className="h3 text-success" />
                  </span>
                </div>
                <div className="feature-content">
                  <h3 className="h5">Comprehensive Trade Information</h3>
                  <p className="mb-0">Get detailed information on trade regulations, customs procedures, documentation requirements, and port logistics for seamless cross-border agricultural trade across Africa.</p>
                </div>
                {/* <Link href="">
                  <a className="link-with-icon text-decoration-none mt-3">
                    View Details{" "}
                    <i className="far mb-1">
                      <BsArrowRight />
                    </i>
                  </a>
                </Link> */}
              </div>
              <div
                className={`feature-card shadow-sm rounded-custom p-5 ${
                  bgDark
                    ? "bg-custom-light promo-border-hover border border-2 border-light text-white"
                    : "bg-white"
                }`}
              >
                <div className="icon-box d-inline-block rounded-circle bg-success-soft mb-32">
                  <span className="fal">
                    <HiOutlineDocumentReport className="h3 text-success" />
                  </span>
                </div>
                <div className="feature-content">
                  <h3 className="h5">Regulatory Assistance</h3>
                  <p className="mb-0">Navigate complex trade regulations and compliance requirements with expert guidance. Get support for export licenses, phytosanitary certificates, and AfCFTA documentation.</p>
                </div>
                {/* <Link href="">
                  <a className="link-with-icon text-decoration-none mt-3">
                    View Details{" "}
                    <i className="far mb-1">
                      <BsArrowRight />
                    </i>
                  </a>
                </Link> */}
              </div>
              <div
                className={`feature-card shadow-sm rounded-custom p-5 ${
                  bgDark
                    ? "bg-custom-light promo-border-hover border border-2 border-light text-white"
                    : "bg-white"
                }`}
              >
                <div className="icon-box d-inline-block rounded-circle bg-danger-soft mb-32">
                  <span className="fal">
                    <HiOutlineUsers className="h3 text-danger" />
                  </span>
                </div>
                <div className="feature-content">
                  <h3 className="h5">Verified Supplier Network</h3>
                  <p className="mb-0">Connect with pre-verified agricultural suppliers and buyers across Africa. All partners are vetted for credibility, quality standards, and trade history to ensure trustworthy transactions.</p>
                </div>
                {/* <Link href="">
                  <a className="link-with-icon text-decoration-none mt-3">
                    View Details{" "}
                    <i className="far mb-1">
                      <BsArrowRight />
                    </i>
                  </a>
                </Link> */}
              </div>
              <div
                className={`feature-card shadow-sm rounded-custom p-5 ${
                  bgDark
                    ? "bg-custom-light promo-border-hover border border-2 border-light text-white"
                    : "bg-white"
                }`}
              >
                <div className="icon-box d-inline-block rounded-circle bg-dark-soft mb-32">
                  <span className="fal">
                    <IoGitCompareOutline className="h3 text-dark" />
                  </span>
                </div>
                <div className="feature-content">
                  <h3 className="h5">Negotiation Support</h3>
                  <p className="mb-0">Get expert assistance in price negotiations, contract terms, and deal structuring. Our platform facilitates transparent communication and fair trade agreements between parties.</p>
                </div>
                {/* <Link href="">
                  <a className="link-with-icon text-decoration-none mt-3">
                    View Details{" "}
                    <i className="far mb-1">
                      <BsArrowRight />
                    </i>
                  </a>
                </Link> */}
              </div>
              <div
                className={`feature-card shadow-sm rounded-custom p-5 ${
                  bgDark
                    ? "bg-custom-light promo-border-hover border border-2 border-light text-white"
                    : "bg-white"
                }`}
              >
                <div className="icon-box d-inline-block rounded-circle bg-warning-soft mb-32">
                  <span className="fal">
                    <HiOutlineCog className="h3 text-warning" />
                  </span>
                </div>
                <div className="feature-content">
                  <h3 className="h5">Documentation Services</h3>
                  <p className="mb-0">Streamline your trade documentation with templates, checklists, and digital document management. Handle invoices, bills of lading, certificates of origin, and compliance documents efficiently.</p>
                </div>
                {/* <Link href="">
                  <a className="link-with-icon text-decoration-none mt-3">
                    View Details{" "}
                    <i className="far mb-1">
                      <BsArrowRight />
                    </i>
                  </a>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOne;
