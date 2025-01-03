"use client";
import classNames from "classnames";
import styles from "./WhidNavbar.module.scss";
import React from "react";
import Nav from "react-bootstrap/esm/Nav";
import Container from "react-bootstrap/esm/Container";
import Navbar from "react-bootstrap/esm/Navbar";

export const WhidNavbar = React.memo(function WhidNavbarFn({}) {
  return (
    <Navbar
      className={classNames(styles.whidNavbar, "py-2")}
      collapseOnSelect={true}
      expand="md"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            aria-label="whid logo"
            className="me-2"
            height="40"
            src="/logo-l.svg"
          />
          what have i done
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto my-1">
            {/* TODO: Make the current page's button text primary color */}
            <Nav.Link href="/" className="btn btn-text-primary me-2">
              home
            </Nav.Link>
            <Nav.Link
              href="/dub"
              className="btn btn-text-primary me-2 not-root-nav-item"
            >
              whidubbed
            </Nav.Link>
            <Nav.Link
              href="/whyd"
              className="btn btn-text-primary me-2 not-root-nav-item"
            >
              <span className={styles.shortWhyd}>whyd</span>
              <span className={styles.longWhyd}>what have you done</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
});
