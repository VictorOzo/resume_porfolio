"use client";

import { useState, MouseEvent } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Articles", href: "#articles" },
    { label: "Projects", href: "#projects" },
    { label: "Digital Playground", href: "/DigitalPlayground" },
  ];

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#") && pathname !== "/") {
      e.preventDefault();
      router.push(`/${href}`);
    }
    setIsOpen(false);
  };

  return (
    <nav className="w-full border-b border-gray-200 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-tight">
          <Link href="/">vo</Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm font-medium items-center">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative pb-1 transition-all duration-300
                    after:content-[''] after:absolute after:left-0 after:bottom-0
                    after:h-0.5 after:bg-black dark:after:bg-white
                    after:w-0 after:transition-all after:duration-300
                    hover:after:w-full
                    ${isActive ? "after:w-full" : ""}
                  `}>
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right Actions (Desktop) */}
        <div className="hidden md:flex gap-2">
          <button className="border border-gray-300 px-4 py-2 text-xs font-semibold transition-all duration-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">
            LIGHT
          </button>
          <button className="bg-black text-white px-4 py-2 text-xs font-semibold transition-all duration-300 hover:bg-gray-700 dark:bg-white dark:text-black dark:hover:bg-gray-300">
            DARK
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-[4vh] pb-[4vh]">
          <ul className="flex flex-col gap-6 text-sm font-medium text-center items-center">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex gap-2 mt-6">
            <button className="flex-1 border border-gray-300 px-4 py-3 text-xs font-semibold transition-all duration-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">
              LIGHT
            </button>
            <button className="flex-1 bg-black text-white px-4 py-3 text-xs font-semibold transition-all duration-300 hover:bg-gray-700 dark:bg-white dark:text-black dark:hover:bg-gray-300">
              DARK
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
