import { Link } from "@tanstack/react-router";
import LogoImage from "@/assets/images/logo.png";

export const Logo = () => {
  return (
    <Link to="/" className="self-center">
      <span
        role="img"
        aria-label="Logo TechStation"
        className="block h-10 w-40 bg-primary"
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
  );
};
