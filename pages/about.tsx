/** @jsxImportSource @emotion/react */
import Next from "next";
import Image from "next/image";
import React from "react";
import { css } from '@emotion/react';
import Layout, { baseContentSection } from "../app/components/Layout";
import Link from 'next/link';

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

const aboutPicture = css`
  display: block;
  margin: 1rem auto 2rem auto;
  width: 160px;
  height: 160px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid #a5e2f5;
  box-shadow: 0 0 0 8px #2d2d2d, 0 4px 24px rgba(0,0,0,0.3);
`;

const AboutPage: React.FC = () => {
  return (
    <Layout title="bpuebla - about" description="about bpuebla, a software engineer specializing in backend, data, and devops solutions.">
      <section css={aboutContentSection}>
        <h2 className="about-title">About</h2>
        <Image
          src="/yo.jpg"
          alt="Profile"
          width={160}
          height={160}
          css={aboutPicture}
        />
        <div className="about-content">
          <p>
          hi visitor, i'm Bautista Puebla, a software engineer based in madrid. currently working on geospatial ml + data at Xcalibur Smart Mapping.
          <br />
          i help people build and deploy backend-heavy stuff, see <Link href="/freelance">here</Link>.
          <br />
          i am also working on the personal radio station from the future, Mockingbird FM.
        </p>
        <p>
          when not coding i'm probably reading mishima, listening to hypnagogic pop, or wandering around museums.
        </p>

        <p>
          contact me: <a href="mailto:0bautistapuebla@gmail.com">0bautistapuebla@gmail.com</a> (with a zero!) or find me on <a href="https://github.com/bpuebla">github</a>, <a href="https://x.com/0bautistapuebla">x</a> and <a href="https://www.linkedin.com/in/bpuebla">linkedin</a>.
        </p>

        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;