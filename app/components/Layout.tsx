/** @jsxImportSource @emotion/react */
import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { css, keyframes } from '@emotion/react';

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(2deg); }
`;

const glow = keyframes`
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.7; }
`;

const pageLayout = css`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  position: relative;
`;

const mainContent = css`
  flex: 1;
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
  min-height: 100vh;
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
    background: radial-gradient(circle, rgba(255, 204, 128, 0.2) 0%, transparent 70%);
    animation: ${float} 8s ease-in-out infinite;
    
    &:nth-child(1) {
      width: 120px;
      height: 120px;
      top: 15%;
      left: 10%;
      animation-delay: 0s;
    }
    
    &:nth-child(2) {
      width: 80px;
      height: 80px;
      top: 70%;
      right: 15%;
      animation-delay: 2s;
    }
    
    &:nth-child(3) {
      width: 60px;
      height: 60px;
      bottom: 20%;
      left: 20%;
      animation-delay: 4s;
    }
  }
`;

export const baseContentSection = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px 60px;
  border: 3px solid rgba(170, 170, 157, 0.8);
  border-radius: 15px;
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
  
  /* Subtle glow effect */
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, rgba(255, 204, 128, 0.3), rgba(170, 170, 157, 0.3));
    border-radius: 17px;
    z-index: -1;
    animation: ${glow} 4s ease-in-out infinite;
  }
  
  /* Inner content styling */
  & > * {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 900px) {
    max-width: 95%;
    padding: 30px 40px;
    min-height: 50vh;
  }
  
  @media (max-width: 600px) {
    padding: 20px 30px;
    min-height: 40vh;
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

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <div css={pageLayout}>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <main css={mainContent}>
        <div css={floatingElements}>
          <div className="floating-orb"></div>
          <div className="floating-orb"></div>
          <div className="floating-orb"></div>
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
