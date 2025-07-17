/** @jsxImportSource @emotion/react */
import React from "react";
import Link from "next/link";
import { css } from '@emotion/react';
import Layout, { baseContentSection } from "../app/components/Layout";
import { getAllPosts } from '../lib/posts';
import type { Post } from '../lib/posts';

const homeContentSection = css`
  ${baseContentSection}
  
  .blogs-title {
    font-family: 'EB Garamond', serif;
    font-size: 32px;
    color: #fff5e1;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
  }

  .blog-list {
    display: inline-block;
    text-align: left;
    background: rgba(0, 0, 0, 0.6);
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
  }

  .blog-entry {
    display: flex;
    align-items: flex-end;
    font-family: 'IM Fell English', serif;
    font-size: 20px;
    color: #e0d6c9;
    padding: 8px 0;
  }

  .index-number {
    font-size: 18px;
    margin-right: 10px;
    color: #c4a484;
  }

  .blog-link {
    color: #e0d6c9;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      text-decoration: underline;
      color: #ffcc80;
      text-shadow: 0px 0px 5px rgba(255, 204, 128, 0.8);
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
        <h2 className="blogs-title">Library of Thoughts</h2>
        <div className="blog-list">
          {posts.map((post, index) => (
            <div key={post.id} className="blog-entry">
              <span className="index-number">{index + 1}.</span>
              <Link href={`/posts/${post.id}`} className="blog-link">
                {post.title}
              </Link>
            </div>
          ))}
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
