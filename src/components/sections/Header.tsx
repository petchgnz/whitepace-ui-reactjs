import { ChevronDown, MoveRight } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-primaryBlue flex h-[70px] w-full items-center text-white">
      <div className="container mx-auto flex items-center justify-between">
        <a href="#">
          <img
            src="/logo/logo-white.png"
            alt="whitepace logo"
            width={200}
          ></img>
        </a>
        <div className="flex items-center gap-12">
          <nav>
            <ul className="flex items-center gap-10">
              <li className="flex items-center">
                <a href="#" className="flex items-center gap-2">
                  Products
                  <ChevronDown size={14} />
                </a>
              </li>
              <li className="flex items-center">
                <a href="#" className="flex items-center gap-2">
                  Solutions
                  <ChevronDown size={14} />
                </a>
              </li>
              <li className="flex items-center">
                <a href="#" className="flex items-center gap-2">
                  Resources
                  <ChevronDown size={14} />
                </a>
              </li>
              <li className="flex items-center">
                <a href="#" className="flex items-center gap-2">
                  Pricing
                  <ChevronDown size={14} />
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-5">
            <button className="bg-secondaryYellow text-secondaryBlack hover:bg-secondaryYellowDark cursor-pointer rounded-md px-5 py-2 transition-all ease-out">
              Login
            </button>
            <button className="bg-primaryCyan hover:bg-primaryCyanDark flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 transition-all ease-out">
              Try Whitepace free
              <MoveRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
