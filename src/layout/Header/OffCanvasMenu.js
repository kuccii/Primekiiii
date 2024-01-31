import React from "react";
import Link from "next/link";
import {
  navCompanyLinks,
  navCompanyPage,
  offcanvasMenuData,
} from "../../utils/data";

const OffCanvasMenu = () => {
  return (
    <div className="offcanvas-body">
      <ul className="nav col-12 col-md-auto justify-content-center main-menu">
        <li data-bs-dismiss="offcanvas" aria-label="Close">
          <Link href="/">
            <a className="nav-link">Home</a>
          </Link>
        </li>
        <li data-bs-dismiss="offcanvas" aria-label="Close">
          <Link href="/about-us">
            <a className="nav-link">About</a>
          </Link>
        </li>
        <li data-bs-dismiss="offcanvas" aria-label="Close">
          <Link href="/services">
            <a className="nav-link">Services</a>
          </Link>
        </li>
        <li data-bs-dismiss="offcanvas" aria-label="Close">
          <Link href="/pricing">
            <a className="nav-link">Pricing</a>
          </Link>
        </li>
        {/* <li data-bs-dismiss="offcanvas" aria-label="Close">
          <Link href="#">
            <a className="nav-link">Company</a>
          </Link>
        </li> */}
      </ul>
      <div className="action-btns mt-4 ps-3">
        {/* <span data-bs-dismiss="offcanvas" aria-label="Close">
          <Link href="/login">
            <a className="btn btn-outline-primary text-decoration-none me-2">
              Sign In
            </a>
          </Link>
        </span> */}
        <span data-bs-dismiss="offcanvas" aria-label="Close">
          <Link href="https://afyacentral.com">
            <a className="btn btn-primary">Marketplace</a>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default OffCanvasMenu;