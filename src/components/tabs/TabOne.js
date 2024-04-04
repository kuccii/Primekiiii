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
              subtitle="Your Trade Partner"
              title="About Qivook"
              description=""
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
                      <h3>Who we are</h3>
                      <p>
                      Qivook stands out as a transformative force in cross-border trade in Africa, dedicated to leveraging
                technology and rich information to spur change and growth{' '}
                      </p>
                      <p>
                      Our Platform goes beyond transactional efficiency; it's a hub for empowering businesses with reliable supplier networks, up to date
                information inlcuding a monthly e-magazine on market trends, and streamlined trade processes.
              
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
                      Qivook actively promotes smoother trade flows and bolsters intra-African trade, 
                      marking our contribution towards a unified African market.
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
                      Our mission at Qivook is not just to facilitate transactions, 
                      but to empower traders with a comprehensive suite of tools, resources, 
                      and insightful knowledge. We aim to unlock new possibilities for traders 
                      across the continent, making Qivook the cornerstone of a more connected, informed, 
                      and prosperous trading ecosystem in Africa.
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
