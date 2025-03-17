import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import React from "react";
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
    <footer className="w-full py-16 bg-next-ai-3framerwebsiteblack-pearl">
      <div className="container max-w-[1224px] mx-auto px-4">
        {/* Top section with logo and navigation */}
        <div className="flex flex-row justify-between items-center mb-12">
          {/* Logo */}
          <div className="[font-family:'DM_Sans',Helvetica] font-medium text-white text-3xl leading-9 tracking-[-0.18px]">
            Next AI
          </div>

          {/* Navigation links */}
          <nav className="flex space-x-10">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="[font-family:'Inter',Helvetica] font-light text-white text-base leading-[25.6px]"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <Separator className="bg-next-ai-3framerwebsitewhite-10 my-8" />

        {/* Bottom section with copyright and social icons */}
        <div className="flex justify-between items-center mt-8">
          {/* Copyright text */}
          <div className="font-next-ai-3-framer-website-inter-light text-next-ai-3framerwebsitewhite-50 text-[length:var(--next-ai-3-framer-website-inter-light-font-size)] leading-[var(--next-ai-3-framer-website-inter-light-line-height)]">
            © 2025 Next AI Inc. All rights reserved.
          </div>

          {/* Social media icons */}
          <div className="flex space-x-4">
            {socialIcons.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  className="text-white hover:text-next-ai-3framerwebsitewhite-70 transition-colors"
                >
                  <IconComponent size={24} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};
