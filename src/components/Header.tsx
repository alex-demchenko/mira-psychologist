"use client";

import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

export default function Header() {
  return (
    <header className="mx-auto mt-6 px-4 max-w-[1200px]">
      {/* Mobile */}
      <HeaderMobile className="block md:hidden" />
      {/* Desktop */}
      <HeaderDesktop className="hidden md:flex" />
    </header>
  );
}
