/**
 * Superior Cleaning Services
 *
 * @module /src/components/Header/Header.jsx
 */

//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
// Components
import SkipLink from '../SkipLink/SkipLink.jsx';

// CSS
import './Header.css';

//------------------------------------------------------------------------------
// File-level constants
//------------------------------------------------------------------------------
const LINKS = [
  {
    copy: "Services",
    anchor: "our-services",
  },
  {
    copy: "About",
    anchor: "about-us",
  },
  {
    copy: "Reviews",
    anchor: "social",
  },
];

//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
/**
 * @component Header
 * @description The site's header component.
 */
const Header = () => {

  // If no nav link data is available, don't render this component
  if (LINKS.length < 1) {
    return;
  }

  /**
   * Generates a linked logo.
   * @returns {jsx} Logo link jsx.
   */
  const generateLogo = () => {
    return (
      <a className="logo-link" href="/" aria-label="Superior Cleaning Services">
        <img src="/scs-logo.png" alt="Superior Cleaning Services" className="logo"/>
      </a>
    );
  }

  /**
   * Generates a list of nav links.
   * @returns {jsx} JSX for header nav links.
   */
  const generateNavLinks = () => {
    // Initialize an array to hold nav link jsx
    let jsx = [];

    // Build a list item nav link for each menu option
    for (let link of LINKS) {

      // Build nav link
      jsx.push(
        <li
          key={link.copy.toLowerCase().replaceAll(' ', '-')}
          className="nav-link-item">
          <a
            key={link.copy.toLowerCase().replaceAll(' ', '-')}
            href={`#${link.anchor}`} 
            className="nav-link"
            aria-label={link.copy}
          >
            <p className="link-copy">{link.copy}</p>
          </a>
        </li>
      );
    }

    return jsx;
  }

  return (
    <header id="header">
      <div>
        <SkipLink />

        {/* Logo */}
        {generateLogo()}

        {/* Nav Links */}
        <nav className="nav">
          <ul className="nav-links">
            {generateNavLinks()}
          </ul>
        </nav>
      </div>
      {/* <p id="locally-owned">✨Locally owned and operated✨</p> */}
    </header>
  )
}

export default Header;