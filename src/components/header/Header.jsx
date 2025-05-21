import { IoIosFootball } from "react-icons/io";

const Header = () => {
  return (
    <header className="w-full h-[80px] bg-bg-primary py-2 fixed mx-auto">
      <div className="container mx-auto flex items-center justify-between px-72">
        <div className="text-6xl">
          <IoIosFootball />
        </div>
        <div>
          <h1 className="text-3xl font-[Inter] font-medium">Football Players</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
