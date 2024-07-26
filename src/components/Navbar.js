import { useState } from 'react';
import Link from 'next/link';
import "../styles/navbar.css";
import { FaSearch, FaUserCircle, FaMapMarkerAlt } from 'react-icons/fa';

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav className="navbar">
      <Link href="/" className="navbar-brand">PitchCraft</Link>
      <div className={`navbar-collapse ${dropdownOpen ? 'show' : ''}`}>
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <button
              className="nav-link-seperate dropdown-toggle no-border" // Added no-border class
              type="button"
              onClick={toggleDropdown}
            >
              <FaMapMarkerAlt className="mr-1" /> Location
            </button>
            <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
              <Link href="#" className="dropdown-item">Nearby Location 1</Link>
              <Link href="#" className="dropdown-item">Nearby Location 2</Link>
              <Link href="#" className="dropdown-item">Nearby Location 3</Link>
            </div>
          </li>
          <li className="nav-item">
            <Link href="#" className="nav-link">Discover</Link>
          </li>
          <li className="nav-item">
            <Link href="#" className="nav-link">Craft Your Pitch</Link>
          </li>
          <li className="nav-item">
            <Link href="#" className="nav-link">Recommendation</Link>
          </li>
          <li className="nav-item">
            <Link href="#" className="nav-link">Search Investor</Link>
          </li>
          <li className="nav-item">
            <Link href="#" className="nav-link">News</Link>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <form className="form-inline my-2 my-lg-0">
              <div className="input-group">
                <div className="input-group-prepend">
                  <button className="btn btn-outline-secondary" type="button">
                    <FaSearch />
                  </button>
                </div>
                <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
              </div>
            </form>
          </li>
          <li className="nav-item">
            <Link href="#" className="nav-link">Notifications</Link>
          </li>
          <li className="nav-item">
            <Link href="#" className="nav-link">My Pitch</Link>
          </li>
          <li className="nav-item">
            <Link href="#" className="nav-link"><FaUserCircle /> </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
