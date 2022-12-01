import Link from 'next/link';
import { IPost } from '../interfaces/post.interface';

interface Posts {
  [key: string]: number;
  total: number;
}

export default function SideBar({ posts }: { posts: IPost[] }) {
  const sideBar = posts.reduce<Posts>(
    (acc, { frontMatter: { category } }) => {
      if (!acc[category]) acc[category] = 0;
      acc[category]++;
      acc.total++;
      return acc;
    },
    { total: 0 },
  );

  return (
    <div className="px-5 w-1/6">
      <div className="grid grid-cols-1 divide-y sticky top-2 w-44">
        <Link href="" className="flex items-center justify-between hover:bg-slate-100 px-2 py-3">
          <span>All</span>
          <div className="flex items-center border rounded-xl px-2 py-1 text-white bg-black text-xs">
            <span>{sideBar.total}</span>
          </div>
        </Link>
        {Object.entries(sideBar).map(([category, number], index) => {
          if (category !== 'total')
            return (
              <Link key={index} href="" className="flex items-center justify-between hover:bg-slate-100 px-2 py-3">
                <span>{category}</span>
                <div className="flex items-center border rounded-xl px-2 py-1 text-white bg-black text-xs">
                  <span>{number}</span>
                </div>
              </Link>
            );
        })}
      </div>
    </div>
  );
}
