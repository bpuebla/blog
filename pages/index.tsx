/** @jsxImportSource @emotion/react */
import React from "react";
import Link from "next/link";
import Head from "next/head";
import Navbar from "../app/components/Navbar";
import Footer from "../app/components/Footer";
import { css } from '@emotion/react';
import { getAllPosts } from '../lib/posts';
import type { Post } from '../lib/posts';

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

const contentSection = css`
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

  @media (max-width: 900px) {
    max-width: 50%;
    padding: 20px 30px;
  }
`;

interface HomePageProps {
  posts: Post[];
}

const HomePage: React.FC<HomePageProps> = ({ posts }) => {
  return (
    <div css={pageLayout}>
      <Head>
        <title>bpuebla - home</title>
      </Head>
      <Navbar />
      <main css={mainContent}>
        <section css={contentSection}>
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
      </main>
      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: { posts }
  };
}

export default HomePage;