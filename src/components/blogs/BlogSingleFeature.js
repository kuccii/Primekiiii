import React from 'react';
import Image from 'next/image';

import ProfileCard from './ProfileCard';

const BlogSingleFeature = () => {
  return (
    <>
      <section className="blog-details ptb-120">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-8 pe-5">
              <div className="blog-details-wrap">
                <p>
                  Serious agricultural deals in Africa are not just about swapping contacts on messaging apps. They require verified partners, clear documentation, and a step-by-step process from inquiry to shipment and payment. QSource Network is designed to make that full pipeline visible and manageable for everyone involved.
                </p>
                <p>
                  Instead of hunting for scattered information, trade teams can see the complete picture: who the counterparty is, what products and volumes are being discussed, which documents are uploaded, and what stage the deal is in. This is how you move from informal conversations to traceable, bankable trade flows.
                </p>
                <div className="blog-details-info mt-5">
                  <h3 className="h5">From Inquiry to Structured Deal</h3>
                  <ul className="content-list list-unstyled">
                    <li>
                      Start with a clear inquiry that captures commodity, quality, volume, target ports, and expected timelines.
                    </li>
                    <li>
                      Use profiles and documents to verify the counterparty before you commit to serious negotiation.
                    </li>
                    <li>
                      Move through structured stages: negotiation, samples and quality checks, contracting, logistics, and payment.
                    </li>
                    <li>
                      Keep a full audit trail of who approved what and when, including any backward moves in the pipeline.
                    </li>
                    <li>
                      Capture learnings and data from each deal to make the next one faster and lower risk.
                    </li>
                    <li>
                      Use this structure to build a repeatable, scalable trade operation instead of one-off transactions.
                    </li>
                    <li>
                      Align internal teams (commercial, logistics, compliance, finance) around one shared source of truth.
                    </li>
                  </ul>
                  <blockquote className="bg-white custom-shadow p-5 mt-5 rounded-custom border-4 border-primary border-top">
                    <p className="text-muted">
                      <i className="fas fa-quote-left me-2 text-primary"></i>{' '}
                      "We built QSource Network around how agricultural deals actually work: profiles, documents, stages, and history. If a dispute arises or a bank wants to see the trail, everything is in one place—no more relying on screenshots and scattered emails."
                      <i className="fas fa-quote-right ms-2 text-primary"></i>
                    </p>
                  </blockquote>
                </div>
                <Image
                  width={820}
                  height={351}
                  src="/tab-feature-img-4.png"
                  className="img-fluid mt-4 rounded-custom"
                  alt="apply"
                />
                <div className="job-details-info mt-5">
                  <h3 className="h5">What Serious Traders Expect from a Platform</h3>
                  <p>
                    Serious suppliers, buyers, and logistics providers are not looking for another social network. They need a working environment that respects the complexity of their work and reduces operational risk. That means verification, clear roles, document control, and a transparent pipeline.
                  </p>
                  <ul className="content-list list-unstyled">
                    <li>
                      Verified trade profiles with clear roles, capacities, and compliance documents.
                    </li>
                    <li>
                      A pipeline that enforces the right order: due diligence before commitment, documents before shipment, and agreed evidence before final payment.
                    </li>
                    <li>
                      Tools for handling exceptions—disputes, quality issues, or delays—without losing the overall view of the deal.
                    </li>
                  </ul>
                </div>

                <div className="blog-details-info mt-5">
                  <h3 className="h5">Skill & Experience</h3>
                  <ul className="content-list list-unstyled">
                    <li>
                      You have at least 3 years’ experience working as a Product
                      Designer.
                    </li>
                    <li>
                      You have experience using Sketch and InVision or Framer X
                    </li>
                    <li>
                      You have some previous experience working in an agile
                      environment – Think two-week sprints.
                    </li>
                    <li>
                      You are familiar using Jira and Confluence in your
                      workflow
                    </li>
                  </ul>
                </div>

                <Image
                  width={820}
                  height={355}
                  src="/tab-feature-img-2.png"
                  className="img-fluid mt-5 rounded-custom"
                  alt="apply"
                />
              </div>
            </div>
            <div className="col-lg-4">
              <ProfileCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSingleFeature;
