/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from '@emotion/react';
import Layout, { baseContentSection } from "../app/components/Layout";

const freelanceContentSection = css`
  ${baseContentSection}
  
  // .freelance-title {
  //   font-family: 'EB Garamond', serif;
  //   font-size: 32px;
  //   color: #fff5e1;
  //   text-transform: uppercase;
  //   letter-spacing: 2px;
  //   margin-bottom: 20px;
  //   text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
  // }

  .freelance-content {
    font-size: 18px;
    line-height: 1.6;
    color: #e0d6c9;
    max-width: 600px;
    text-align: left;
  }
  h3 {
      font-family: 'EB Garamond', serif;
      font-size: 1.5rem;
      color: #fff5e1;
      text-transform: uppercase;
      letter-spacing: 3px;
      margin-bottom: 1rem;
      text-align: center;
      position: relative;
      }
`;

const FreelancePage: React.FC = () => {
  return (
    <Layout title="bpuebla - freelance">
      <section css={freelanceContentSection}>
        <h2 className="freelance-title">Freelance</h2>
        <div className="freelance-content">
            <p>i work with founders, researchers, and teams to turn messy ideas into stable, deployable systems. 
              my focus is backend, data, and devops; especially when geospatial or ml is involved.</p>
          <h3 className="freelance-subtitle">What I can build for you</h3>
          <ul>
            <li><strong>auth systems </strong>&#10230; email/password + oauth</li>
            <li><strong>ml model deployment </strong>&#10230; wrap your model in an api, stage it, ship it</li>
            <li><strong>geospatial apis </strong>&#10230; fast endpoints for map-based data & queries</li>
            <li><strong>data pipelines </strong>&#10230; extract / transform / store your chaos</li>
            <li><strong>infra setup </strong>&#10230; dockerize your project, set up ci/cd, deploy it in cloud</li>
          </ul>
          <h3 className="freelance-subtitle">How to get in touch</h3>
          <p>If you have a project in mind or just want to chat about possibilities, feel free to reach out via email at <a href="mailto:0bautistapuebla@gmail.com">0bautistapuebla@gmail.com</a>
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default FreelancePage;