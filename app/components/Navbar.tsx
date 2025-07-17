
/** @jsxImportSource @emotion/react */
import Link from 'next/link';
import { css } from '@emotion/react';

const navbarStyles = css`
  background-color: #402F25 !important;
  padding: 0.5em 1em;
  display: flex !important;
  align-items: center;
  justify-content: center; /* changed from space-between to center */
  position: relative;
  z-index: 999;
  width: 100%;

  .navbar {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
  }

  .navbar li {
    margin: 0 1em;
  }

  .navbar a {
    display: inline-block;
    color: #fff;
    text-decoration: none;
    font-size: 1.25em;
    transition: color 0.3s ease;
  }

  .navbar a:hover {
    color: #a5e2f5;
    animation: tilt-shaking 0.25s ease;
  }

  @keyframes tilt-shaking {
    0% { transform: rotate(0deg); }
    25% { transform: rotate(-5deg); }
    50% { transform: rotate(5deg); }
    75% { transform: rotate(-5deg); }
    100% { transform: rotate(0deg); }
  }
`;

const Navbar: React.FC = () => {
  console.log('navbar rendering'); // debug log
  return (
    <nav css={navbarStyles}>
      <ul className="navbar">
        {[
          { name: "home", link: "/" },
          { name: "about", link: "/about" },
          { name: "services", link: "/services" },
          { name: "github", link: "https://github.com/bpuebla" },
          { name: "contact", link: "mailto:0bautistapuebla@gmail.com" },
        ].map((item) => (
          <li key={item.name}>
            {item.link.startsWith('mailto:') ? (
              <a href={item.link}>{item.name}</a>
            ) : (
              <Link href={item.link}>{item.name}</Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;