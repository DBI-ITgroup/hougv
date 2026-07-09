import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo11.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Philosophy", path: "/our-philosophy" },
    { name: "Platforms", path: "/platforms" },
    { name: "Partners", path: "/partners" },
    { name: "Impact", path: "/impact" },
    { name: "Contact", path: "/contact" },
  ];

  const platformItems = [
    {
      title: "Ubuntu Without Borders™",
      subtitle: "Official Flagship Programme",
      path: "/ubuntu-without-borders",
    },
    {
      title: "Ubuntu Wine Alliance™",
      subtitle: "Strategic Platform",
      path: "/ubuntu-wine-alliance",
    },
    {
      title: "VIA Collective™",
      subtitle: "Portugal Flagship Platform",
      path: "/via-collective",
    },
  ];

  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          {/* <div className="w-12 h-12 rounded-full bg-[#C89B3C] flex items-center justify-center text-white font-bold text-xl">
            H
          </div>

          <div>
            <h1 className="text-white font-semibold text-lg tracking-wide">
              House of Ubuntu
            </h1>

            <p className="text-white/70 text-xs">Global Voices</p>
          </div> */}
          <img
            src={logo}
            alt="House of Ubuntu Global Voices"
            className="h-30 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => {
            if (link.name === "Platforms") {
              return (
                <div key={link.path} className="relative group">
                  <Link
                    to={link.path}
                    className="flex items-center gap-1 text-white text-sm hover:text-[#C89B3C] transition"
                  >
                    {link.name}
                    <ChevronDown size={16} />
                  </Link>

                  {/* Dropdown */}
                  <div className="absolute left-0 top-full mt-4 w-80 bg-white rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-5">

                    <p className="text-xs uppercase tracking-widest text-[#C89B3C] mb-4">
                      Our Strategic Platforms
                    </p>

                    {platformItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block rounded-xl p-3 hover:bg-gray-100 transition"
                      >
                        <h4 className="font-semibold text-[#0F2747]">
                          {item.title}
                        </h4>

                        <p className="text-sm text-gray-500">
                          {item.subtitle}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.path}
                to={link.path}
                className="text-white text-sm hover:text-[#C89B3C] transition"
              >
                {link.name}
              </Link>
            );
          })}

          <Link
          to="/contact"
          className="bg-[#C89B3C] text-white px-6 py-3 rounded-full text-sm hover:bg-[#B87333] transition "
        >
          Partner With Us
        </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-[#0F2747] px-6 py-6">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className="block text-white py-3 border-b border-white/10 hover:text-[#C89B3C] transition"
            >
              {link.name}
            </Link>
          ))}

          <div className="mt-6">
            <p className="text-xs uppercase tracking-widest text-[#C89B3C] mb-3">
              Our Strategic Platforms
            </p>

            {platformItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className="block py-2 pl-3 text-white/90 hover:text-[#C89B3C] transition"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;