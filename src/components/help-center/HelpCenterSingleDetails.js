import React from 'react';
import Link from 'next/link';
import { BiCommentDetail } from 'react-icons/bi';
import { FaRegEnvelope, FaRegListAlt } from 'react-icons/fa';

const HelpCenterSingleDetails = () => {
  return (
    <section className="support-content ptb-120">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-4 col-md-4 d-none d-md-block d-lg-block">
              <div className="support-article-sidebar sticky-sidebar">
              <Link href="/help-center">
                <a className="btn btn-primary mb-4 btn-sm">
                  <i className="far fa-angle-left me-2"></i> Go Back
                </a>
              </Link>
              <div className="nav flex-column nav-pills support-article-tab bg-light rounded-custom p-5">
                <h5>Related Support Articles</h5>
                <Link href="/help-center-single">
                  <a className="text-muted text-decoration-none py-2 d-block">
                    How do I get my trade profile verified?
                  </a>
                </Link>
                <Link href="/help-center-single">
                  <a className="text-muted text-decoration-none py-2 d-block">
                    What documents are required before I can close a deal?
                  </a>
                </Link>
                <Link href="/help-center-single">
                  <a className="text-muted text-decoration-none py-2 d-block">
                    How does the deal pipeline work on QSource Network?
                  </a>
                </Link>
                <Link href="/help-center-single">
                  <a className="text-muted text-decoration-none py-2 d-block">
                    How are disputes handled between buyers and suppliers?
                  </a>
                </Link>
                <Link href="/help-center-single">
                  <a className="text-muted text-decoration-none py-2 d-block">
                    How are payments and subscriptions managed?
                  </a>
                </Link>
                <Link href="/help-center-single">
                  <a className="text-muted text-decoration-none py-2 d-block">
                    What security measures protect my data and documents?
                  </a>
                </Link>
              </div>
              <div className="bg-light p-5 mt-4 rounded-custom quick-support">
                <Link href="/contact-us">
                  <a className="text-decoration-none text-muted d-flex align-items-center py-2">
                    <div className="quick-support-icon rounded-circle bg-success-soft me-3">
                      <i className="far text-success">
                        <FaRegListAlt />
                      </i>
                    </div>
                    <div className="contact-option-text">
                      Quick Support Form
                    </div>
                  </a>
                </Link>
                <Link href="mailto:support@qivook.com">
                  <a className="text-decoration-none text-muted d-flex align-items-center py-2">
                    <div className="quick-support-icon rounded-circle bg-primary-soft me-3">
                      <i className="far text-primary">
                        <FaRegEnvelope />
                      </i>
                    </div>
                    <div className="contact-option-text">support@qivook.com</div>
                  </a>
                </Link>
                <Link href="#!">
                  <a className="text-decoration-none text-muted d-flex align-items-center py-2">
                    <div className="quick-support-icon rounded-circle bg-danger-soft me-3">
                      <i className="far text-danger">
                        <BiCommentDetail />
                      </i>
                    </div>
                    <div className="contact-option-text">Live Support Chat</div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-8 p-lg-5">
            <div className="support-article-wrap">
              <h1 className="display-5 mb-4 fw-bold">
                How do I get my trade profile verified on QSource Network?
              </h1>
              <p>
                Verification is how we protect serious traders on QSource Network. A verified profile shows other businesses that you have provided accurate information about your company, your role in the value chain, and the key documents that support your activities (such as registration, tax, or export licenses).
              </p>
              <p>
                Once you submit your profile and upload the requested documents, our team or automated checks will review them. If something is missing or unclear, we&apos;ll ask for clarification rather than simply rejecting you, because we understand documentation in African markets is not always straightforward.
              </p>

              <div className="job-details-info my-5">
                <h3 className="h5">Steps to Get Verified</h3>
                <ul className="content-list list-unstyled">
                  <li>
                    Complete your trade profile with your real business name, role (supplier, buyer, logistics, customs), and primary commodities.
                  </li>
                  <li>
                    Upload clear copies of your key documents (e.g. company registration, tax certificate, export license where applicable).
                  </li>
                  <li>
                    Ensure your contact information (phone and email) is reachable, as our team may contact you for a quick verification call if needed.
                  </li>
                  <li>
                    Keep your profile up to date when your capacity, locations, or documents change so that counterparties always see accurate information.
                  </li>
                  <li>
                    If your profile is flagged or verification is delayed, respond promptly to any requests from the QSource support team.
                  </li>
                </ul>
              </div>
              <p>
                A verified profile is not a guarantee of performance, but it is a strong signal that you are a serious, identifiable business. It also unlocks additional visibility and pipeline features inside QSource Network, helping you access better partners and higher quality deals.
              </p>
              <p>
                If you have questions about specific documents or operate in a context where formal paperwork is limited, contact our team. We will work with you to find a practical way to demonstrate credibility without blocking your access to opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpCenterSingleDetails;
