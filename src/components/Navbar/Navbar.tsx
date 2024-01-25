// components/Navbar/Navbar.js
"use client";
import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">Logo</Link>
      </div>

      <nav className={styles.navLinks}>
        <Link href="/">Home</Link>
        <Link href="/about">Suppliers</Link>
        <Link href="/customers">Customers</Link>
        <Link href="/transporters">Transporters</Link>
        <Link href="/profile">Profile</Link>
      </nav>

      <div className={styles.actions}>
        <div className={styles.searchIcon}>
          <span role="img" aria-label="Search Icon">
            🔍
          </span>
        </div>

        <div className={styles.loginSignup}>
          <Link href="/login">Login</Link>
          <Link href="/signup">Signup</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
