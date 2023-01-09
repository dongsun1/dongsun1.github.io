import { ICategoryCounts } from '../interfaces/post.interface';

export default function SideBar({
  categoryCounts,
  total,
  getPosts,
}: {
  categoryCounts: ICategoryCounts;
  total: number;
  getPosts: ({ category }: { category: string }) => void;
}) {
  const onClickCategory = ({ category }: { category: string }) => {
    getPosts({ category });
  };

  return (
    <div className="px-5 w-1/6 hidden lg:block">
      <div className="grid grid-cols-1 divide-y sticky top-2 w-44">
        <button
          onClick={() => onClickCategory({ category: '' })}
          className="flex items-center justify-between hover:bg-slate-100 dark:hover:bg-gray-600 px-2 py-3 dark:text-gray-300"
        >
          <span>All</span>
          <div className="flex items-center border-0 rounded-xl px-2 py-1 text-white bg-black text-xs dark:bg-gray-300">
            <span className="dark:text-gray-900">{total}</span>
          </div>
        </button>
        {Object.entries(categoryCounts).map(([category, number], index) => {
          if (category !== 'total')
            return (
              <button
                onClick={() => onClickCategory({ category })}
                key={index}
                className="flex items-center justify-between hover:bg-slate-100 dark:hover:bg-gray-600 px-2 py-3 dark:text-gray-300"
              >
                <span>{category}</span>
                <div className="flex items-center border-0 rounded-xl px-2 py-1 text-white bg-black text-xs dark:bg-gray-300">
                  <span className="dark:text-gray-900">{number}</span>
                </div>
              </button>
            );
        })}
      </div>
    </div>
  );
}
