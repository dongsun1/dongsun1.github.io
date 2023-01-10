import Category from '../components/category';
import Title from '../components/title';
import { ICategoryCounts, IPost } from '../interfaces/post.interface';
import { GetServerSideProps } from 'next';
import { useState } from 'react';
import Container from '../components/container';
import Sidebar from '../components/sidebar';

interface IPosts {
  _id: string;
  title: string;
  date: Date;
  category: string;
}
interface ICategories {
  [key: string]: IPosts[];
}

export default function Categories({
  posts,
  categoryCounts,
  total,
  API_URL,
}: {
  posts: IPost[];
  categoryCounts: ICategoryCounts;
  total: number;
  API_URL: string;
}) {
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const getPosts = async ({ category }: { category: string }) => {
    const data = { category };
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { posts } = await (await fetch(`${API_URL}/api/getPosts`, options)).json();
    setFilteredPosts(posts);
  };

  const categories = filteredPosts.reduce<ICategories>((acc, { _id, title, date, category }) => {
    if (!acc[category]) acc[category] = [];
    acc[category].push({ _id, title, date, category });
    return acc;
  }, {});

  return (
    <Container title="dongsun1 blog categories" desc="dongsun1 blog 카테고리별 조회 페이지">
      <div className="container mx-auto">
        <Title title="Categories" />
        <div className="flex px-4 lg:px-32">
          <div className="flex flex-col w-5/6">
            {Object.entries(categories).map(([category, posts], index) => {
              return <Category key={index} category={category} posts={posts} />;
            })}
          </div>
          <Sidebar categoryCounts={categoryCounts} total={total} getPosts={getPosts} />
        </div>
      </div>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { API_URL } = process.env;
    const { posts } = await (await fetch(`${API_URL}/api/getPosts`)).json();
    const { categoryCounts } = await (await fetch(`${API_URL}/api/getCategory`)).json();

    return {
      props: {
        posts,
        total: posts.length,
        categoryCounts,
        API_URL,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      notFound: true,
    };
  }
};
