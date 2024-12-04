import { IoSearchOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { useEffect, useState } from "react";
import ProfileSidenav from "./ProfileSidenav";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useLocation } from "react-router-dom";
import { setFilteredVideos, setQuery } from "../redux/slices/searchSlice";

//toggle hamburger to open or close sidebar
const Navbar = ({
  onToggleSidebar,
}: {
  onToggleSidebar: () => void;
}): JSX.Element => {
  const [isProfileSidenavOpen, setIsProfileSidenavOpen] = useState(false);
  const { isAuthenticated, user } = useSelector(
    (state: RootState) => state.auth
  );
  const { query } = useSelector((state: RootState) => state.search);
  const { videos } = useSelector((state: RootState) => state.video);
  const dispatch = useDispatch();

  const location = useLocation();

  useEffect(() => {
    setIsProfileSidenavOpen(false);
  }, [location]);

  const toggleProfileSidenav = () => {
    setIsProfileSidenavOpen((prev) => !prev);
  };

  //for search
  const handleSearchChange = (e: any) => {
    const searchQuery = e.target.value;
    dispatch(setQuery(searchQuery));

    const filteredVideos = videos.filter((video) =>
      video.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    dispatch(setFilteredVideos(filteredVideos)); //for filtered video
  };

  return (
    <nav className="flex justify-between items-center px-4 py-2 relative ">
      <div className="flex items-center gap-2">
        <RxHamburgerMenu
          onClick={onToggleSidebar}
          className="cursor-pointer"
          size={24}
        />
        <Link to="/">
          <img
            src="./youtubelogo.jpg"
            alt="YouTube Logo"
            className="md:h-14 h-10"
          />
        </Link>
      </div>
      <div className="flex items-center  gap-2">
        <input
          type="text"
          placeholder="Search videos here"
          className="border outline-none rounded-full px-3 py-1 sm:w-[25vw] w-[30vw]"
          value={query}
          onChange={handleSearchChange}
        />
        <IoSearchOutline className="text-gray-500" size={20} />
      </div>
      <button
        onClick={toggleProfileSidenav}
        className="text-sm font-semibold flex items-center gap-1 border px-2 py-1 rounded-full"
      >
        {isAuthenticated && user?.avatar ? (
          <img
            src={user.avatar}
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
          />
        ) : (
          <>
            <CgProfile size={18} /> Profile
          </>
        )}
      </button>
      <ProfileSidenav
        isOpen={isProfileSidenavOpen}
        toggleSidebar={toggleProfileSidenav}
      />
    </nav>
  );
};

export default Navbar;
