import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/navbar.module.css'; // Importing the CSS module
import { FaSearch, FaUserCircle, FaMapMarkerAlt } from 'react-icons/fa';

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.navbarBrand}>
        PitchCrafta
      </Link>
      <div className={`${styles.navbarCollapse} ${dropdownOpen ? styles.show : ''}`}>
        <ul className={styles.navbarNav}>
          <li className={styles.navItem}>
            <button
              className={`${styles.navLinkSeparate} ${styles.noBorder}`}
              type="button"
              onClick={toggleDropdown}
            >
              <FaMapMarkerAlt className="mr-1" /> Location
            </button>
            <div className={`${styles.dropdownMenu} ${dropdownOpen ? styles.show : ''}`}>
              <Link href="#" className={styles.dropdownItem}>
                Nearby Location 1
              </Link>
              <Link href="#" className={styles.dropdownItem}>
                Nearby Location 2
              </Link>
              <Link href="#" className={styles.dropdownItem}>
                Nearby Location 3
              </Link>
            </div>
          </li>
          <li className={styles.navItem}>
            <Link href="/discover" className={styles.navLink}>
              Discover
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/craft-pitch" className={styles.navLink}>
              Craft Your Pitch
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/recommendation" className={styles.navLink}>
              Recommendation
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/search-investor" className={styles.navLink}>
              Search Investor
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/news" className={styles.navLink}>
              News
            </Link>
          </li>
        </ul>
        <ul className={`${styles.navbarNav} ${styles.mlAuto}`}>
          <li className={styles.navItem}>
            <form className={styles.formInline} onSubmit={(e) => e.preventDefault()}>
              <div className={styles.inputGroup}>
                <div className={styles.inputGroupPrepend}>
                  <button className={styles.btnOutlineSecondary} type="button">
                    <FaSearch />
                  </button>
                </div>
                <input className={styles.formControl} type="search" placeholder="Search" aria-label="Search" />
              </div>
            </form>
          </li>
          <li className={styles.navItem}>
            <Link href="#" className={styles.navLink}>
              Notifications
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="#" className={styles.navLink}>
              My Pitch
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="#" className={styles.navLink}>
              <FaUserCircle />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
