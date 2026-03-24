import IconUser from "@/assets/images/icon-user.png";
import LogoImage from "@/assets/images/logo.png";
import { Link } from "@tanstack/react-router";
import { MenuMobile } from "../MenuMobile";
import { CartButton } from "../CartButton";
import { CartDrawer } from "../CartDrawer";
import { useState } from "react";

export interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "Teclados", href: "/products/category/teclados" },
  { name: "Mouses", href: "/products/category/mouses" },
  { name: "Monitores", href: "/products/category/monitores" },
];

export const Header = () => {
  const [cartIsOpen, setCartIsOpen] = useState<boolean>(false);

  return (
    <div className="relative">
      <header className="fixed top-5 left-0 right-0 z-10 mx-10">
        <div className="bg-white text-black max-w-330 mx-auto flex justify-between items-center py-3 px-7 rounded-2xl mt-5">
          <Link to="/" className="flex items-center shrink-0">
            <span
              role="img"
              aria-label="Logo TechStation"
              className="block h-10 w-36 bg-primary"
              style={{
                WebkitMaskImage: `url(${LogoImage})`,
                maskImage: `url(${LogoImage})`,
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                maskPosition: "center",
                WebkitMaskSize: "contain",
                maskSize: "contain",
              }}
            />
          </Link>

          <nav className="hidden lg:block">
            <ul className="flex gap-10">
              {navLinks.map((link) => (
                <Link to={link.href} key={link.name}>
                  {link.name}
                </Link>
              ))}
            </ul>
          </nav>

          <nav>
            <ul className="flex gap-4 md:gap-10 items-center justify-end md:justify-center">
              <li className="hidden lg:block">
                <Link to="/our-stores">Nossas lojas</Link>
              </li>
              <li className="hidden lg:block">
                <Link to="/about">Sobre</Link>
              </li>
              <li className="lg:hidden flex items-center">
                <MenuMobile navLinks={navLinks} />
              </li>
              <li className="hidden lg:block">
                <Link to="/sign-up">
                  <img src={IconUser} alt="Ícone de login" />
                </Link>
              </li>
              <li className="flex items-center">
                <CartButton onClick={() => setCartIsOpen(true)} />
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <CartDrawer isOpen={cartIsOpen} onClose={() => setCartIsOpen(false)} />
    </div>
  );
};
