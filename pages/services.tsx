/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from '@emotion/react';
import Layout, { baseContentSection } from "../app/components/Layout";

const servicesContentSection = css`
  ${baseContentSection}
  
  .services-title {
    font-family: 'EB Garamond', serif;
    font-size: 32px;
    color: #fff5e1;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
  }

  .services-content {
    font-size: 18px;
    line-height: 1.6;
    color: #e0d6c9;
    max-width: 600px;
  }
`;

const ServicesPage: React.FC = () => {
  return (
    <Layout title="bpuebla - services">
      <section css={servicesContentSection}>
        <h2 className="services-title">Services</h2>
        <div className="services-content">
          <p>your services content here...</p>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;