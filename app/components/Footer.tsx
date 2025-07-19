/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';

const pulse = keyframes`
  0%, 100% { opacity: 0.6; }
  50% { opacity: 0.9; }
`;

const subtleGlow = keyframes`
  0%, 100% { 
    box-shadow: 
      0 -4px 20px rgba(165, 226, 245, 0.05),
      inset 0 1px 0 rgba(255, 204, 128, 0.05);
  }
  50% { 
    box-shadow: 
      0 -4px 30px rgba(165, 226, 245, 0.1),
      inset 0 1px 0 rgba(255, 204, 128, 0.1);
  }
`;

const textShimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: 200px 0; }
`;

const footerStyle = css`
  background: linear-gradient(135deg, 
    rgba(64, 47, 37, 0.98) 0%, 
    rgba(56, 34, 34, 0.98) 50%, 
    rgba(64, 47, 37, 0.98) 100%
  );
  backdrop-filter: blur(12px);
  border-top: 2px ridge rgba(170, 170, 157, 0.4);
  padding: 1em 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff5e1;
  position: relative;
  z-index: 10;
  animation: ${subtleGlow} 6s ease-in-out infinite;
  
  /* atmospheric overlay */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(ellipse at 25% 0%, rgba(255, 204, 128, 0.08) 0%, transparent 60%),
      radial-gradient(ellipse at 75% 0%, rgba(165, 226, 245, 0.06) 0%, transparent 60%);
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
    background: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fff5e1' fill-opacity='0.015'%3E%3Ccircle cx='15' cy='15' r='0.3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    pointer-events: none;
    z-index: -1;
  }

  .footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
    max-width: 1200px;
    width: 100%;
    position: relative;
    z-index: 1;
  }

  .copyright {
    margin: 0;
    font-family: 'EB Garamond', serif;
    font-size: 0.95em;
    font-weight: 400;
    letter-spacing: 0.5px;
    text-align: center;
    color: #fff5e1;
    opacity: 0.8;
    position: relative;
    padding: 0.5em 2em;
    border-radius: 3px;
    background: linear-gradient(
      90deg,
      rgba(255, 204, 128, 0.02),
      rgba(165, 226, 245, 0.02),
      rgba(255, 204, 128, 0.02)
    );
    border: 1px solid rgba(170, 170, 157, 0.1);
    transition: all 0.3s ease;
    
    /* shimmer effect */
    background-size: 200px 100%;
    background-image: linear-gradient(
      90deg, 
      transparent, 
      rgba(165, 226, 245, 0.03), 
      transparent
    );
    animation: ${textShimmer} 3s linear infinite;
    
    &:hover {
      opacity: 1;
      color: #a5e2f5;
      border-color: rgba(165, 226, 245, 0.2);
      background: linear-gradient(
        90deg,
        rgba(255, 204, 128, 0.05),
        rgba(165, 226, 245, 0.05),
        rgba(255, 204, 128, 0.05)
      );
    }
  }

  .footer-ornament {
    width: 60px;
    height: 2px;
    background: linear-gradient(90deg, 
      transparent, 
      rgba(165, 226, 245, 0.6), 
      rgba(255, 204, 128, 0.4), 
      rgba(165, 226, 245, 0.6), 
      transparent
    );
    border-radius: 2px;
    animation: ${pulse} 4s ease-in-out infinite;
    margin-bottom: 0.5em;
  }

  .footer-dots {
    display: flex;
    gap: 8px;
    margin-top: 0.5em;
    
    .dot {
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: rgba(165, 226, 245, 0.4);
      animation: ${pulse} 2s ease-in-out infinite;
      
      &:nth-child(2) { animation-delay: 0.3s; }
      &:nth-child(3) { animation-delay: 0.6s; }
    }
  }

  @media (max-width: 768px) {
    padding: 1.5em 1em;
    
    .copyright {
      font-size: 0.9em;
      padding: 0.5em 1.5em;
    }
    
    .footer-ornament {
      width: 40px;
    }
  }
`;

const Footer = () => (
  <footer css={footerStyle}>
    <div className="footer-content">
      {/* <div className="footer-ornament" /> */}
      <p className="copyright">&copy; 2025 bpuebla. all rights reserved.</p>
      {/* <div className="footer-dots">
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
      </div> */}
    </div>
  </footer>
)

export default Footer