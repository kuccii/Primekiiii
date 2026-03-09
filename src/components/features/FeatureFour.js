/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaGrinStars, FaShieldAlt, FaViber } from "react-icons/fa";

import SectionTitle from "../common/SectionTitle";

const FeatureFour = () => {
  return (
    <>
      <section className="feature-section ptb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12">
              <SectionTitle
                subtitle="Our Core Values"
                title="What Sets Us Apart"
                description="Built on principles that ensure your success in African agricultural trade"
                centerAlign
              />
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-6">
              <div className="position-relative">
                <div className="cta-card rounded-custom text-center custom-shadow p-5 bg-white mt-4 mt-lg-0 mt-md-0 z-2">
                  <div className="feature-icon d-inline-block bg-primary-soft rounded-circle mb-32">
                    <i className="fad text-primary fa-2x">
                      <FaShieldAlt />
                    </i>
                  </div>
                  <h3 className="h5">Simplified Trade Process</h3>
                  <p className="mb-0">Streamlined workflows from inquiry to delivery. Our platform reduces complexity, saves time, and makes cross-border agricultural trade accessible to businesses of all sizes.</p>
                </div>

                <div className="dot-shape-bg position-absolute z--1 left--40 top--40">
                  <img src="/shape/dot-big-square.svg" alt="shape" />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="position-relative">
                <div className="cta-card rounded-custom text-center custom-shadow p-5 bg-white mt-4 mt-lg-0 mt-md-0">
                  <div className="feature-icon d-inline-block bg-danger-soft rounded-circle mb-32">
                    <i className="fad text-danger fa-2x">
                      <FaViber />
                    </i>
                  </div>
                  <h3 className="h5">Reliability</h3>
                  <p className="mb-0">Verified partners, secure transactions, and dependable support. We ensure every trade connection is built on trust and backed by our commitment to your success.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="position-relative">
                <div className="cta-card rounded-custom text-center custom-shadow p-5 bg-white mt-4 mt-lg-0">
                  <div className="feature-icon d-inline-block bg-success-soft rounded-circle mb-32">
                    <i className="fad text-success fa-2x">
                      <FaGrinStars />
                    </i>
                  </div>
                  <h3 className="h5">Transparency</h3>
                  <p className="mb-0">Clear pricing, open communication, and full visibility into your trade transactions. Know exactly what you're getting and who you're working with at every step.</p>
                </div>

                <div className="dot-shape-bg position-absolute z--1 right--40 bottom--40">
                  <img src="/shape/dot-big-square.svg" alt="shape" />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="position-relative">
                <div className="cta-card rounded-custom text-center custom-shadow p-5 bg-white mt-4 mt-lg-0">
                  <div className="feature-icon d-inline-block bg-success-soft rounded-circle mb-32">
                    <i className="fad text-success fa-2x">
                      <FaGrinStars />
                    </i>
                  </div>
                  <h3 className="h5">Efficiency</h3>
                  <p className="mb-0">Reduce transaction costs, eliminate middlemen, and accelerate your trade cycles. Our platform connects you directly with verified partners, cutting time and expenses.</p>
                </div>

                <div className="dot-shape-bg position-absolute z--1 right--40 bottom--40">
                  <img src="/shape/dot-big-square.svg" alt="shape" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureFour;
