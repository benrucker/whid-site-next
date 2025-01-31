import classNames from "classnames";
import Link from "next/link";
import React from "react";
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/esm/Nav";
import Navbar from "react-bootstrap/esm/Navbar";
import NavbarBrand from "react-bootstrap/esm/NavbarBrand";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import styles from "./WhidNavbar.module.scss";

export const WhidNavbar = React.memo(function WhidNavbarFn({}) {
  return (
    <Navbar
      className={classNames(styles.whidNavbar, "py-2")}
      collapseOnSelect={true}
      expand="md"
      data-bs-theme="dark"
    >
      <Container>
        <NavbarBrand href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            aria-label="whid logo"
            className="me-2"
            height="40"
            src="/logo-l.svg"
          />
          what have i done
        </NavbarBrand>
        <NavbarToggle aria-controls="responsive-navbar-nav" />
        <NavbarCollapse id="responsive-navbar-nav">
          <Nav className="ms-auto my-1">
            {/* TODO: Make the current page's button text primary color */}
            <Link href="/" className="btn btn-text-primary me-2">
              home
            </Link>
            <Link
              href="/dub"
              className="btn btn-text-primary me-2 not-root-nav-item"
            >
              the dub
            </Link>
            <Link
              href="/whyd"
              className="btn btn-text-primary me-2 not-root-nav-item"
            >
              <span className={styles.shortWhyd}>whyd</span>
              <span className={styles.longWhyd}>what have you done</span>
            </Link>
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
});
