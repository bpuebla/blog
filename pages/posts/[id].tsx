/** @jsxImportSource @emotion/react */
import React from "react";
import { GetStaticProps, GetStaticPaths } from 'next';
import { css, keyframes } from '@emotion/react';
import Layout, { baseContentSection } from "../../app/components/Layout";
import { getAllPostIds, getPostData } from '../../lib/posts';
import type { PostData } from '../../lib/posts';

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

const postContentSection = css`
  ${baseContentSection}
  animation: ${fadeInUp} 0.8s ease-out;
  display: flex;
  flex-direction: column;
  min-height: 80vh; // ensures enough height for bottom alignment

  .post-header {
    text-align: center;
    margin-bottom: 3rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid rgba(255, 204, 128, 0.3);
    .post-title {
      font-family: 'EB Garamond', serif;
      font-size: clamp(2rem, 4vw, 3.5rem);
      color: #fff5e1;
      margin-bottom: 1rem;
      line-height: 1.2;
    }
    
    .post-meta {
      color: #c4a484;
      font-style: italic;
      font-size: 1.1rem;
      
      .date {
        margin-right: 1rem;
      }
    }
  }
  
  .post-content {
    font-family: 'EB Garamond', serif;
    font-size: 1.2rem;
    line-height: 1.8;
    color: #e0d6c9;
    
    h1, h2, h3, h4, h5, h6 {
      color: #fff5e1;
      margin: 2rem 0 1rem 0;
      font-weight: 600;
    }
    
    h1 { font-size: 2.5rem; }
    h2 { font-size: 2rem; }
    h3 { font-size: 1.5rem; }
    
    p {
      margin-bottom: 1.5rem;
      text-align: justify;
    }
    
    blockquote {
      border-left: 4px solid #ffcc80;
      margin: 2rem 0;
      padding: 1rem 2rem;
      background: rgba(255, 204, 128, 0.1);
      border-radius: 0 8px 8px 0;
      font-style: italic;
      
      p:last-child {
        margin-bottom: 0;
      }
    }
    
    code {
      background: rgba(0, 0, 0, 0.4);
      padding: 0.2rem 0.4rem;
      border-radius: 4px;
      font-family: 'Fira Code', monospace;
      font-size: 0.9em;
      color: #ffcc80;
    }
    
    pre {
      background: rgba(0, 0, 0, 0.6);
      padding: 1.5rem;
      border-radius: 8px;
      overflow-x: auto;
      margin: 1.5rem 0;
      border: 1px solid rgba(255, 255, 255, 0.1);
      
      code {
        background: none;
        padding: 0;
        color: #e0d6c9;
      }
    }
    
    ul, ol {
      margin: 1.5rem 0;
      padding-left: 2rem;
      
      li {
        margin-bottom: 0.5rem;
      }
    }
    
    a {
      color: #ffcc80;
      text-decoration: none;
      border-bottom: 1px solid transparent;
      transition: all 0.3s ease;
      
      &:hover {
        color: #fff5e1;
        border-bottom-color: #fff5e1;
      }
    }
    
    img {
      max-width: 100%;
      height: auto;
      border-radius: 8px;
      margin: 2rem 0;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
    }
    
    hr {
      border: none;
      height: 1px;
      background: linear-gradient(90deg, transparent, #ffcc80, transparent);
      margin: 3rem 0;
    }
  }
  
  .back-link {
    display: inline-block;
    margin-top: 3rem;
    padding: 0.8rem 1.5rem;
    background: rgba(255, 204, 128, 0.1);
    color: #ffcc80;
    text-decoration: none;
    border-radius: 8px;
    border: 1px solid rgba(255, 204, 128, 0.3);
    transition: all 0.3s ease;
    font-family: 'EB Garamond', serif;
    font-size: 1.1rem;
    margin-top: auto; // pushes to bottom

    &:hover {
      background: rgba(255, 204, 128, 0.2);
      transform: translateX(-5px);
      box-shadow: 0 4px 20px rgba(255, 204, 128, 0.2);
    }

    &::before {
      content: '← ';
      margin-right: 0.5rem;
    }
  }
`;

interface PostProps {
  postData: PostData;
}

const Post: React.FC<PostProps> = ({ postData }) => {
  return (
    <Layout title={`${postData.title} - bpuebla`}>
      <article css={postContentSection}>
        <header className="post-header">
          <h1 className="post-title">{postData.title}</h1>
          <div className="post-meta">
            {postData.date && <span className="date">{postData.date}</span>}
          </div>
        </header>
        
        <div 
          className="post-content"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
        />
        
        <a href="/" className="back-link">
          back to library
        </a>
      </article>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.id as string);
  return {
    props: {
      postData
    }
  };
};

export default Post;