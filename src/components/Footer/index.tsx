import { Copyright } from "../Copyright";
import { SubscriptionForm } from "../SubscriptionForm";
import { SocialLinks } from "../SocialLinks";
import { MenuItems } from "../MenuItems";

export const Footer = () => {
  return (
    <footer className="bg-footer-bg">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between items-start py-10 md:py-12 px-2 gap-10">
          <div className="flex flex-col gap-8 w-full lg:max-w-107.5">
            <SubscriptionForm />

            <SocialLinks />
          </div>

          <MenuItems />
        </div>
        <Copyright />
      </div>
    </footer>
  );
};
