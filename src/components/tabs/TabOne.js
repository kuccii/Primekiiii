/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

import SectionTitle from '../common/SectionTitle';

const TabOne = () => {
  return (
    <section className="feature-tab-section ptb-120 bg-white">
      <div className="container">
        <div className="row justify-content-center align-content-center">
          <div className="col-md-10 col-lg-6">
            <SectionTitle
              subtitle="About Us"
              title="QSource Network (QSN) by Qivook"
              description="Empowering African agricultural trade through QSource Network and trusted connections"
              centerAlign
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <ul
              className="nav justify-content-center feature-tab-list-2 mb-0"
              id="nav-tab"
              role="tablist"
            >
              <li className="nav-item">
                <Link href="#!">
                  <a
                    className="nav-link active"
                    to="#tab-1"
                    data-bs-toggle="tab"
                    data-bs-target="#tab-1"
                    role="tab"
                    aria-selected="false"
                  >
                    Who we Are
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#!">
                  <a
                    className="nav-link"
                    to="#tab-2"
                    data-bs-toggle="tab"
                    data-bs-target="#tab-2"
                    role="tab"
                    aria-selected="false"
                  >
                    Our Values
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#!">
                  <a
                    className="nav-link"
                    to="#tab-3"
                    data-bs-toggle="tab"
                    data-bs-target="#tab-3"
                    role="tab"
                    aria-selected="false"
                  >
                    Our Mission
                  </a>
                </Link>
              </li>
            </ul>
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade pt-60 active show"
                id="tab-1"
                role="tabpanel"
              >
                <div className="row justify-content-center align-items-center justify-content-around">
                  <div className="col-lg-5">
                    <div className="feature-tab-info">
                      <h3>Who We Are</h3>
                      <p>
                      Qivook is a forward-thinking company dedicated to revolutionizing cross-border agricultural trade on the African continent through the QSource Network (QSN) platform. With a deep commitment to improving the efficiency, transparency, and accessibility of trade, we are on a mission to empower businesses, particularly small and medium-sized enterprises (SMEs), across Africa.
                      </p>
                      <p>
                      We utilize cutting-edge technology through the QSource Network platform to optimize trade processes, reduce barriers, and cultivate a more efficient, inclusive, and equitable agricultural trading environment that benefits all participants.
                      </p>
                      <Link href="/about-us">
                        <a className="read-more-link text-decoration-none mt-4 d-block">
                          Know More About Us
                          <span className="far ms-2 mb-1">
                            <FiArrowRight />
                          </span>
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <img
                      src="/about.gif"
                      alt="feature tab"
                      className="img-fluid mt-4 mt-lg-0 mt-xl-0"
                    />
                  </div>
                </div>
              </div>
              <div className="tab-pane fade pt-60" id="tab-2" role="tabpanel">
                <div className="row justify-content-center align-items-center justify-content-around">
                  <div className="col-lg-5">
                    <img
                      src="/values.gif"
                      alt="feature tab"
                      className="img-fluid mb-4 mb-lg-0 mb-xl-0"
                    />
                  </div>
                  <div className="col-lg-5">
                    <div className="feature-tab-info">
                      <h3>Our Values</h3>
                      <p>
                      By aligning with the African Continental Free Trade Area (AfCFTA), 
                      Qivook actively promotes smoother trade flows through the QSource Network platform and bolsters intra-African agricultural trade, 
                      marking our contribution towards a unified African market. We believe in building 
                      strong relationships with our customers and suppliers based on trust, integrity, and mutual respect, 
                      striving to provide personalized support and regular updates to ensure a seamless 
                      trading experience for all parties.
                      </p>
                      <p>Our commitment includes reducing transaction costs, eliminating unnecessary middlemen, and making cross-border agricultural trade more 
                      accessible and cost-efficient through the QSource Network platform. We stand for transparency, reliability, and efficiency in every transaction.
                      </p>
            
                      <Link href="/about-us">
                        <a className="read-more-link text-decoration-none mt-4 d-block">
                          Know More About Us
                          <span className="far ms-2 mb-1">
                            <FiArrowRight />
                          </span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade pt-60" id="tab-3" role="tabpanel">
                <div className="row justify-content-center align-items-center justify-content-around">
                  <div className="col-lg-5">
                    <div className="feature-tab-info">
                      <h3>Our Mission</h3>
                      <p>
                      We aim to unlock new possibilities for agricultural traders across the African continent,
                       making the QSource Network (QSN) platform the cornerstone of a more connected, informed, 
                       and prosperous agricultural trading ecosystem. Our vision is to see African agricultural businesses thrive through seamless cross-border trade.
                      </p>
                     <p>Our mission at Qivook is not just to facilitate transactions through the QSource Network platform, 
                      but to empower agricultural traders with a comprehensive suite of tools, resources, 
                      market intelligence, and insightful knowledge that enables them to compete and succeed in the global marketplace.</p>
                      <Link href="/about-us">
                        <a className="read-more-link text-decoration-none mt-4 d-block">
                          Know More About Us
                          <span className="far ms-2 mb-1">
                            <FiArrowRight />
                          </span>
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <img
                      src="/values.gif"
                      alt="feature tab"
                      className="img-fluid mt-4 mt-lg-0 mt-xl-0"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabOne;
