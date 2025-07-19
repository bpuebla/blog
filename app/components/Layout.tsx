//layout.tsx

/** @jsxImportSource @emotion/react */
import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { css, keyframes } from '@emotion/react';

const float = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(0.5); }
`;

const glow = keyframes`
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.7; }
`;

const pageLayout = css`
  height: 100vh; // change from min-height to height
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  overflow: hidden; // add this to prevent scroll
  position: relative;
`;


const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;


const mainContent = css`
  flex: 1; // this will take remaining space after navbar/footer
  margin: 0;
  padding: 20px;
  background-image: url('/back.jpg');
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff5e1;
  width: 100vw;
  box-sizing: border-box;
  min-height: 0; // add this for proper flex shrinking
  overflow-y: auto; // add this so content can scroll within main if needed
  position: relative;
  
  
  /* Add some atmospheric elements */
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 20%, rgba(255, 204, 128, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(170, 170, 157, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 40% 70%, rgba(64, 47, 37, 0.2) 0%, transparent 50%);
    pointer-events: none;
    z-index: 1;
  }
  
  &::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fff5e1' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 1;
  }
`;

const floatingElements = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 2;
  
  .floating-orb {
    position: absolute;
    border-radius: 50%;
    background: radial-gradient(circle,rgba(165, 226, 245, 0.6), rgba(255, 204, 128, 0.1) 80%);
    animation: ${float} 8s ease-in-out infinite;
    &:nth-child(1) {
      width: 120px;
      height: 120px;
      top: 15%;
      left: 30%;
      animation-delay: 0s;
    }
    
    &:nth-child(2) {
      width: 80px;
      height: 80px;
      top: 70%;
      right: 30%;
      animation-delay: 2s;
    }
    
    &:nth-child(3) {
      width: 60px;
      height: 60px;
      bottom: 20%;
      left: 22%;
      animation-delay: 4s;
    }
    &:nth-child(4) {
      width: 100px;
      height: 100px;
      top: 50%;
      right: 20%;
      animation-delay: 6s;
    }
  }
`;

export const baseContentSection = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px 150px;
  border: 2px ridge rgba(170, 170, 157, 0.8);
  border-radius: 5px;
  box-shadow: 
    0 0 50px rgba(0, 0, 0, 0.8),
    inset 0 0 20px rgba(255, 204, 128, 0.1),
    0 0 100px rgba(170, 170, 157, 0.2);
  backdrop-filter: blur(10px);
  background: 
    linear-gradient(135deg, 
      rgba(64, 47, 37, 0.95) 0%, 
      rgba(56, 34, 34, 0.95) 50%, 
      rgba(64, 47, 37, 0.95) 100%
    );
  color: #ffffed;
  position: relative;
  z-index: 3;
  margin: 2em auto;
  max-width: 90%;
  min-height: 60vh;
  text-align: left;
  animation: ${fadeInUp} 0.8s ease-out;

  /* Subtle glow effect */
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, rgba(255, 204, 128, 0.3), rgba(170, 170, 157, 0.3));
    border-radius: 5px;
    z-index: -1;
    animation: ${glow} 4s ease-in-out infinite;
  }
  
  h2 {
      font-family: 'EB Garamond', serif;
      font-size: 2.5rem;
      color: #fff5e1;
      text-transform: uppercase;
      letter-spacing: 3px;
      margin-bottom: 2rem;
      text-align: center;
      position: relative;
      padding: 0 100px;
      &::after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: 100px;
        height: 2px;
        background: linear-gradient(90deg, transparent, #a5e2f5, transparent);
      }
      }
  /* Inner content styling */
  & > * {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 900px) {
    max-width: 95%;
    padding: 30px 40px;
    height: auto;
    min-height: 60vh;
    overflow: visible; // keep glow animation intact
    
    h2 {
      font-size: 2rem;
      padding: 0 50px;
    }
  }

  @media (max-width: 600px) {
    padding: 20px 30px;
    height: auto;
    min-height: 50vh;
    overflow: visible;
    
    h2 {
      font-size: 1.8rem;
      padding: 0;
    }
  }

  @media (max-width: 400px) {
    padding: 15px 20px;
    margin: 1em auto;
    max-width: 98%;
    min-height: 40vh;
    overflow: visible;
    
    h2 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      letter-spacing: 1px;
    }
  }

  @media (max-width: 320px) {
    padding: 10px 15px;
    margin: 0.5em auto;
    max-width: 99%;
    min-height: 35vh;
    border-width: 1px;
    overflow: visible;
    
    h2 {
      font-size: 1.3rem;
      margin-bottom: 0.8rem;
      letter-spacing: 0.5px;
    }
  }
`;

const contentWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 3;
`;

interface LayoutProps {
  children: React.ReactNode;
  title: string;
}

const orbConfigs = [
  { width: 120, height: 120, top: '34%', left: '27%', delay: '0s' },
  { width: 80, height: 80, top: '70%', right: '30%', delay: '2s' },
  { width: 40, height: 40, bottom: '20%', left: '14%', delay: '4s' },
  { width: 100, height: 100, top: '50%', right: '20%', delay: '6s' },
  { width: 30, height: 30, top: '10%', right: '15%', delay: '2s' },
  { width: 60, height: 60, top: '12%', left: '25%', delay: '3s' },
  { width: 100, height: 100, top: '10%', right: '20%', delay: '5s' },
  { width: 90, height: 90, bottom: '40%', left: '21%', delay: '2s' },
  { width: 60, height: 60, top: '22%', right: '25%', delay: '2s' },
  { width: 80, height: 80, bottom: '30%', left: '15%', delay: '4s' },
  { width: 50, height: 50, top: '40%', right: '10%', delay: '6s' },
  { width: 70, height: 70, bottom: '20%', left: '30%', delay: '3s' },
  { width: 40, height: 40, top: '50%', right: '25%', delay: '5s' },
  { width: 30, height: 30, bottom: '10%', left: '20%', delay: '4s' },
  { width: 50, height: 50, top: '30%', right: '15%', delay: '6s' },
  { width: 70, height: 70, bottom: '50%', left: '10%', delay: '2s' },
  { width: 60, height: 60, top: '20%', right: '30%', delay: '3s' },
  
  
];

// Helper to generate inline styles for each orb
const getOrbStyle = (config: any): React.CSSProperties => ({
  width: config.width,
  height: config.height,
  top: config.top,
  left: config.left,
  right: config.right,
  bottom: config.bottom,
  animationDelay: config.delay,
  position: 'absolute' as const,
});

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <div css={pageLayout}>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <main css={mainContent}>
        <div css={floatingElements}>
          {orbConfigs.map((config, idx) => (
            <div
              key={idx}
              className="floating-orb"
              style={getOrbStyle(config)}
            />
          ))}
        </div>
        <div css={contentWrapper}>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
