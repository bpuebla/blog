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
  
`;

const AboutPage: React.FC = () => {
  return (
    <Layout title="bpuebla - about">
      <section css={aboutContentSection}>
        <h2 className="about-title">About</h2>
        <div className="about-content">
          <p>
            software engineer based in madrid. currently working on ML and data @ Xcalibur Smart Mapping. 
            
            i build and deploy stuff. 
          </p>
          <p>i can help you with:</p>
            <ul>
            <li>backend systems with Django, FastAPI, or Gin Gonic</li>
            <li>devops with Docker and GitHub Actions</li>
            <li>data pipelines with Airflow, Prefect, Spark, or custom scripts</li>
            <li>data lakehouses on Databricks</li>
            <li>ML models with PyTorch or TensorFlow deployed on Django or FastAPI</li>
            <li>cloud services like AWS, GCP, or Azure</li>
            <li>databases like Postgres, MySQL, or MongoDB</li>
            <li>anything related to geospatial</li>
            <li>can lend a hand with Next.js or React</li>
            </ul>
          <p>
            when not coding i'm probably reading mishima, listening to hypnagogic pop, 
            or wandering around museums.
          </p>
          <p>
            send me an email at <a href="emailto:0bautistapuebla@gmail.com">0bautistapuebla@gmail.com</a> (with a zero!) or find me on <a href="https://github.com/bpuebla">github</a> and <a href="https://www.linkedin.com/in/bpuebla">linkedin</a>.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;