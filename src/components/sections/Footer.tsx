import { ChevronDown, Facebook, Linkedin, MoveRight } from "lucide-react";

const menuLinks = [
  {
    title: "Product",
    links: ["Overview", "Pricing", "Customer stories"],
  },
  {
    title: "Resources",
    links: ["Blog", "Guides & tutorials", "Help center"],
  },
  { title: "Company", links: ["About us", "Careers", "Media kit"] },
];

const Footer = () => {
  return (
    <footer className="bg-primaryBlueDark pt-16 pb-6 text-gray-300">
      <div className="container mx-auto px-4">
        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 gap-10 border-b border-gray-700 pb-10 md:grid-cols-5">
          {/* Logo and Description (Column 1) */}
          <div className="col-span-1">
            <h4 className="flex items-center gap-2 text-2xl font-bold text-white">
              <img
                src="/logo/logo-white.png"
                className="w-full"
                alt="whitepace logo"
              />
            </h4>
            <p className="mt-4 max-w-xs text-sm">
              whitepace was created for the new ways we live and work. We make a
              better workspace around the world.
            </p>
          </div>

          {menuLinks.map((col, idx) => (
            <div key={idx} className="px-5">
              <h5 className="mb-4 font-bold text-white">{col.title}</h5>
              <ul className="space-y-3 text-sm">
                {col.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href={`/${link.toLowerCase().replace(/\s/g, "-")}`}
                      className="transition hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Try It Today CTA (Column 5) */}
          <div className="col-span-1">
            <h5 className="mb-4 font-bold text-white">Try It Today</h5>
            <p className="mb-4 max-w-xs text-sm">
              Get started for free. Add your whole team as your needs grow.
            </p>
            <a
              href="/start-today-footer"
              className="inline-flex items-center rounded-md gap-3 bg-primaryCyan px-6 py-2 font-semibold text-white transition hover:bg-primaryCyanDark"
            >
              Start today <MoveRight size={16} />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-6 flex flex-col items-center justify-between space-y-4 text-xs md:flex-row md:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="flex cursor-pointer items-center gap-1 transition hover:text-white">
              English
              <ChevronDown size={14} />
            </div>
            <span className="hidden md:inline">|</span>
            <a href="#" className="hover:text-white">
              Terms & privacy
            </a>
            <a href="#" className="hover:text-white">
              Security
            </a>
            <a href="#" className="hover:text-white">
              Status
            </a>
            <span className="hidden md:inline">|</span>
            <span>©2021 Whitepace LLC.</span>
          </div>

          {/* Right: Social Icons */}
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="transition hover:text-white"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              className="transition hover:text-white"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
