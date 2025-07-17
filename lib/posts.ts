import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface Post {
  id: string;
  title: string;
  date: string;
  content: string;
}

export function getAllPosts(): Post[] {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);
  
  const posts = filenames.map((filename) => {
    const id = filename.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      id,
      title: data.title || 'Untitled',
      date: data.date || '',
      content
    };
  });
  
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}