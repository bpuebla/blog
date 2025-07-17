// app/components/Layout.tsx
/** @jsxImportSource @emotion/react */
import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { css } from '@emotion/react';

const pageLayout = css`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
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
  text-align: center;
  width: 100vw;
  box-sizing: border-box;
  min-height: 100vh;
`;

export const baseContentSection = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px 50px;
  border: 20px ridge rgba(170,170,157,1);
  border-radius: 10px 1px 1px 10px;
  box-shadow: inset 0 0 10px #000000;
  opacity: 1;
  width: fit-content;
  margin: 5em auto;
  background-color: #402F25;
  color: #ffffed;

  @media (max-width: 900px) {
    max-width: 50%;
    padding: 20px 30px;
  }
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
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;