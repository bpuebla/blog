/** @jsxImportSource @emotion/react */
import Link from 'next/link';
import { css, keyframes } from '@emotion/react';

const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: 200px 0; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-3px); }
`;

const glow = keyframes`
  0%, 100% { 
    box-shadow: 
      0 0 20px rgba(165, 226, 245, 0.1),
      inset 0 1px 0 rgba(255, 204, 128, 0.1);
  }
  50% { 
    box-shadow: 
      0 0 30px rgba(165, 226, 245, 0.2),
      inset 0 1px 0 rgba(255, 204, 128, 0.2);
  }
`;

const navbarStyles = css`
  background: linear-gradient(135deg, 
    rgba(64, 47, 37, 0.95) 0%, 
    rgba(56, 34, 34, 0.95) 50%, 
    rgba(64, 47, 37, 0.95) 100%
  );
  backdrop-filter: blur(10px);
  border-bottom: 2px ridge rgba(170, 170, 157, 0.3);
  padding: 1em 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 999;
  width: 100%;
  box-sizing: border-box;
  animation: ${glow} 4s ease-in-out infinite;
  
  /* atmospheric overlay */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 30% 50%, rgba(255, 204, 128, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 70% 50%, rgba(170, 170, 157, 0.05) 0%, transparent 50%);
    pointer-events: none;
    z-index: -1;
  }

  /* subtle texture */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fff5e1' fill-opacity='0.02'%3E%3Ccircle cx='20' cy='20' r='0.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    pointer-events: none;
    z-index: -1;
  }

  .navbar {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    gap: 3em;
    position: relative;
  }

  .navbar li {
    position: relative;
  }

  .navbar a {
    display: inline-block;
    color: #fff5e1;
    text-decoration: none;
    font-size: 1.1em;
    font-family: 'EB Garamond', serif;
    font-weight: 500;
    letter-spacing: 1px;
    padding: 0.8em 1.5em;
    border-radius: 3px;
    border: 1px solid rgba(170, 170, 157, 0.2);
    background: linear-gradient(135deg, 
      rgba(64, 47, 37, 0.6) 0%, 
      rgba(56, 34, 34, 0.6) 100%
    );
    position: relative;
    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    overflow: hidden;
    text-transform: lowercase;
    
    /* shimmer effect overlay */
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg, 
        transparent, 
        rgba(165, 226, 245, 0.1), 
        transparent
      );
      transition: left 0.6s;
    }
  }

  .navbar a:hover {
    color: #a5e2f5;
    border-color: rgba(165, 226, 245, 0.4);
    background: linear-gradient(135deg, 
      rgba(64, 47, 37, 0.8) 0%, 
      rgba(56, 34, 34, 0.8) 100%
    );
    box-shadow: 
      0 4px 20px rgba(0, 0, 0, 0.3),
      inset 0 1px 0 rgba(255, 204, 128, 0.1),
      0 0 15px rgba(165, 226, 245, 0.2);
    transform: translateY(-2px);
    animation: ${float} 2s ease-in-out infinite;
    
    /* trigger shimmer */
    &::before {
      left: 100%;
    }
  }

  /* active/current page styling */
  .navbar a[aria-current="page"] {
    color: #ffcc80;
    border-color: rgba(255, 204, 128, 0.4);
    background: linear-gradient(135deg, 
      rgba(255, 204, 128, 0.1) 0%, 
      rgba(170, 170, 157, 0.1) 100%
    );
    box-shadow: 
      inset 0 0 10px rgba(255, 204, 128, 0.1),
      0 0 10px rgba(255, 204, 128, 0.1);
  }

  @media (max-width: 768px) {
    padding: 1em;
    
    .navbar {
      gap: 1.5em;
      flex-wrap: wrap;
    }
    
    .navbar a {
      font-size: 1em;
      padding: 0.6em 1em;
    }
  }

  @media (max-width: 600px) {
    padding: 0.5em;
    
    .navbar {
      gap: 1em;
      flex-wrap: wrap;
    }
    
    .navbar a {
      font-size: 1em;
      padding: 0.4em 0.66em;
    }
  }
`;

const Navbar: React.FC = () => {
  return (
    <nav css={navbarStyles}>
      <ul className="navbar">
        {[
          { name: "home", link: "/" },
          { name: "about", link: "/about" },
          { name: "freelance", link: "/freelance" },
          { name: "github", link: "https://github.com/bpuebla" },
          { name: "contact", link: "mailto:0bautistapuebla@gmail.com" },
        ].map((item) => (
          <li key={item.name}>
            {item.link.startsWith('mailto:') || item.link.startsWith('http') ? (
              <a href={item.link} target={item.link.startsWith('http') ? '_blank' : undefined}>
                {item.name}
              </a>
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
