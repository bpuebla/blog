/** @jsxImportSource @emotion/react */
import React from "react";
import Link from "next/link";
import { css, keyframes } from '@emotion/react';
import Layout, { baseContentSection } from "../app/components/Layout";
import { getAllPosts } from '../lib/posts';
import type { Post } from '../lib/posts';

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

const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: 200px 0; }
`;

const homeContentSection = css`
  ${baseContentSection}
  text-align: left;
  animation: ${fadeInUp} 0.8s ease-out;
  
  .intro-section {
    margin-bottom: 3rem;
    text-align: center;
    
    .site-title {
      font-family: 'EB Garamond', serif;
      font-size: clamp(2.5rem, 5vw, 4rem);
      color: #fff5e1;
      margin-bottom: 1rem;
      background: linear-gradient(45deg, #fff5e1, #ffcc80, #e0d6c9);
      background-size: 200px 100%;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: ${shimmer} 3s ease-in-out infinite;
    }
    
    .site-subtitle {
      font-size: 1.2rem;
      color: #c4a484;
      font-style: italic;
      margin-bottom: 2rem;
      opacity: 0.9;
    }
  }
  
  .blogs-section {
    .blogs-title {
      font-family: 'EB Garamond', serif;
      font-size: 2.5rem;
      color: #fff5e1;
      text-transform: uppercase;
      letter-spacing: 3px;
      margin-bottom: 2rem;
      text-align: center;
      position: relative;
      
      &::after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: 100px;
        height: 2px;
        background: linear-gradient(90deg, transparent, #ffcc80, transparent);
      }
    }

    .blog-list {
      display: grid;
      gap: 1rem;
      background: rgba(0, 0, 0, 0.3);
      padding: 2rem;
      border-radius: 15px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
      backdrop-filter: blur(5px);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .blog-entry {
      display: flex;
      align-items: center;
      font-family: 'EB Garamond', serif;
      font-size: 1.3rem;
      color: #e0d6c9;
      padding: 1rem;
      background: rgba(255, 255, 255, 0.03);
      border-radius: 8px;
      transition: all 0.3s ease;
      border-left: 3px solid transparent;
      
      &:hover {
        background: rgba(255, 204, 128, 0.1);
        transform: translateX(10px);
        border-left-color: #ffcc80;
        box-shadow: 0 4px 20px rgba(255, 204, 128, 0.2);
      }
    }

    .index-number {
      font-size: 1.1rem;
      margin-right: 1rem;
      color: #ffcc80;
      font-weight: bold;
      min-width: 2rem;
      text-align: center;
      background: rgba(255, 204, 128, 0.2);
      border-radius: 50%;
      width: 2rem;
      height: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'EB Garamond', serif;
    }

    .blog-link {
      color: #e0d6c9;
      text-decoration: none;
      transition: all 0.3s ease;
      flex: 1;
      position: relative;
      overflow: hidden;

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background: linear-gradient(90deg, #ffcc80, #fff5e1);
        transition: width 0.3s ease;
      }

      &:hover {
        color: #fff5e1;
        
        &::after {
          width: 100%;
        }
      }
    }
  }
  
  .stats-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1.5rem;
    margin-top: 3rem;
    
    .stat-item {
      text-align: center;
      padding: 1.5rem;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 10px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      
      .stat-number {
        font-size: 2rem;
        font-weight: bold;
        color: #ffcc80;
        display: block;
      }
      
      .stat-label {
        font-size: 0.9rem;
        color: #c4a484;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
    }
  }
`;

interface HomePageProps {
  posts: Post[];
}

const HomePage: React.FC<HomePageProps> = ({ posts }) => {
  return (
    <Layout title="bpuebla - home">
      <section css={homeContentSection}>
        <div className="intro-section">
          <h1 className="site-title">bpuebla</h1>
          <p className="site-subtitle">musings from the digital monastery</p>
        </div>
        
        <div className="blogs-section">
          <h2 className="blogs-title">Library of Thoughts</h2>
          <div className="blog-list">
            {posts.map((post, index) => (
              <div key={post.id} className="blog-entry">
                <span className="index-number">{index + 1}</span>
                <Link href={`/posts/${post.id}`} className="blog-link">
                  {post.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
        
        <div className="stats-section">
          <div className="stat-item">
            <span className="stat-number">{posts.length}</span>
            <span className="stat-label">Essays</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">∞</span>
            <span className="stat-label">Ideas</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">π</span>
            <span className="stat-label">Complexity</span>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export async function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: { posts }
  };
}

export default HomePage;