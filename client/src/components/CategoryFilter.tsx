import { useDispatch, useSelector } from "react-redux";
import { setCategoryFilter } from "../redux/slices/searchSlice";
import { RootState } from "../redux/store";

const CategoryFilter = (): JSX.Element => {
  const dispatch = useDispatch(); //dispatch action from redux
  const { selectedCategory } = useSelector((state: RootState) => state.search); //selecting state from redux

  //defined categories
  const categories = [
    "All",
    "Gaming",
    "Study",
    "Anime",
    "Funny",
    "Tech",
    "Sports",
    "Travel",
  ];

  const handleCategorySelect = (category: string) => {
    dispatch(setCategoryFilter(category)); //dispatched action
  };

  return (
    <div className="px-4 hidden lg:flex">
      <div className="flex gap-4 overflow-x-auto px-4 py-2 whitespace-nowrap">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategorySelect(category)}
            className={`px-6 py-1 rounded-lg ${
              selectedCategory === category
                ? "bg-zinc-900 text-white"
                : "bg-zinc-200 text-gray-700"
            } transition-all`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
