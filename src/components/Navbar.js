import { useState } from 'react';
import Link from 'next/link';
import "../styles/navbar.css";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link href="/" className="navbar-brand">YourBrand</Link>
      <button
        className="navbar-toggler"
        type="button"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-controls="navbarNav"
        aria-expanded={dropdownOpen}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${dropdownOpen ? 'show' : ''}`} id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
            >
              Location Near Me
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
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
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </li>
          <li className="nav-item">
            <Link href="#" className="nav-link">Notifications</Link>
          </li>
          <li className="nav-item">
            <Link href="#" className="nav-link">My Pitch</Link>
          </li>
          <li className="nav-item">
            <Link href="#" className="nav-link">My Profile</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
