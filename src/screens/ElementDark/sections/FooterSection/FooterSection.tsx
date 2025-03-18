import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import { Separator } from "../../../../components/ui/separator";

export const FooterSection = (): JSX.Element => {
  // Navigation links data
  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "About", href: "#about" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  // Social media icons data
  const socialIcons = [
    { icon: FacebookIcon, href: "#" },
    { icon: TwitterIcon, href: "#" },
    { icon: InstagramIcon, href: "#" },
    { icon: LinkedinIcon, href: "#" },
  ];

  return (
    <footer className="w-full py-8 md:py-16 bg-next-ai-3framerwebsiteblack-pearl">
      <div className="container max-w-[1224px] mx-auto px-4">
        {/* Top section with logo and navigation */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 mb-8 md:mb-12">
          {/* Logo */}
          <div className="[font-family:'DM_Sans',Helvetica] font-medium text-white text-2xl md:text-3xl leading-[1.2] md:leading-9 tracking-[-0.18px]">
            Next AI
          </div>

          {/* Navigation links */}
          <nav className="flex flex-wrap justify-center md:flex-nowrap gap-4 md:gap-10">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="[font-family:'Inter',Helvetica] font-light text-white text-sm md:text-base leading-[1.4] md:leading-[25.6px] hover:text-white/80 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <Separator className="bg-next-ai-3framerwebsitewhite-10 my-6 md:my-8" />

        {/* Bottom section with copyright and social icons */}
        <div className="flex flex-col-reverse md:flex-row justify-center md:justify-between items-center gap-6 md:gap-0 mt-6 md:mt-8">
          {/* Copyright text */}
          <div className="font-next-ai-3-framer-website-inter-light text-next-ai-3framerwebsitewhite-50 text-sm md:text-base text-center md:text-left">
            2025 Next AI Inc. All rights reserved.
          </div>

          {/* Social media icons */}
          <div className="flex space-x-6 md:space-x-4">
            {socialIcons.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  className="text-white hover:text-next-ai-3framerwebsitewhite-70 transition-colors"
                >
                  <IconComponent size={20} className="w-5 h-5 md:w-6 md:h-6" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};
