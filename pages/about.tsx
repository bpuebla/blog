/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from '@emotion/react';
import Layout, { baseContentSection } from "../app/components/Layout";

const aboutContentSection = css`
  ${baseContentSection}
  
  // .about-title {
  //   font-family: 'EB Garamond', serif;
  //     font-size: 2.5rem;
  //     color: #fff5e1;
  //     text-transform: uppercase;
  //     letter-spacing: 3px;
  //     margin-bottom: 2rem;
  //     text-align: center;
  //     position: relative;
      
  //     &::after {
  //       content: '';
  //       position: absolute;
  //       bottom: -10px;
  //       left: 50%;
  //       transform: translateX(-50%);
  //       width: 100px;
  //       height: 2px;
  //       background: linear-gradient(90deg, transparent, #ffcc80, transparent);
  //     }
  // }

  .about-content {
    font-size: 18px;
    line-height: 1.6;
    color: #e0d6c9;
    max-width: 600px;
    text-align: left;
  }

  a {
    color: #a5e2f5;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #fff5e1;
    }
  } 
`;

const aboutPicture = css`
  display: block;
  margin: 0 auto 2rem auto;
  width: 160px;
  height: 160px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid #a5e2f5;
  box-shadow: 0 0 0 8px #2d2d2d, 0 4px 24px rgba(0,0,0,0.3);
`;

const AboutPage: React.FC = () => {
  return (
    <Layout title="bpuebla - about">
      <section css={aboutContentSection}>
        <h2 className="about-title">About</h2>
        <img
          src="/yo.jpg"
          alt="Profile"
          css={aboutPicture}
        />
        <div className="about-content">
          <p>
          hi, i'm bautista puebla. 24yo software engineer based in madrid. currently working on ml + data at xcalibur smart mapping.
          <br />
          i build and deploy backend-heavy stuff.
        </p>

        <p>i can help with:</p>
        <ul>
          <li>backend systems (django, fastapi, gin gonic)</li>
          <li>devops (docker, github actions)</li>
          <li>data pipelines (airflow, prefect, spark, bash if needed)</li>
          <li>data lakehouses (esp. databricks)</li>
          <li>ml model serving (pytorch, tf → fastapi/django)</li>
          <li>cloud infra (aws / gcp / azure)</li>
          <li>databases (postgres, mysql, mongo)</li>
          <li>anything geospatial</li>
          <li>(mild) frontend help with next.js or react</li>
        </ul>

        <p>
          when not coding i'm probably reading mishima, listening to hypnagogic pop, or wandering around museums.
        </p>

        <p>
          contact me: <a href="mailto:0bautistapuebla@gmail.com">0bautistapuebla@gmail.com</a> (with a zero!) or find me on <a href="https://github.com/bpuebla">github</a> and <a href="https://www.linkedin.com/in/bpuebla">linkedin</a>.
        </p>

        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;