import { Fragment, useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";
import { Separator } from "../../../../components/ui/separator";
import { motion, AnimatePresence } from "framer-motion";

export const MainContainerSection = (): JSX.Element => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Height of the fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navItems = [
    { label: "Features", id: "features" },
    { label: "Empower", id: "empower" },
    { label: "About", id: "about" },
    { label: "Pricing", id: "pricing" },
    
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-[1180px] mx-auto">
        <div className={`transition-all duration-700 ease-out ${isScrolled ? 'mt-6 px-4 md:px-12' : 'pt-4'}`}>
          <div className={`h-auto md:h-20 py-4 md:py-0 transition-colors duration-700 ease-out ${
            isScrolled 
              ? 'bg-black/20 backdrop-blur-xl rounded-2xl border border-white/5' 
              : 'bg-next-ai-3framerwebsiteblack-pearl'
          }`}>
            <div className="h-full grid grid-cols-2 md:grid-cols-[1fr_auto_1fr] items-center gap-4 md:gap-6">
              {/* Logo */}
              <div className="pl-4 md:pl-0">
                <motion.div 
                  className="transition-all duration-700 ease-out cursor-pointer"
                  animate={{
                    x: isScrolled ? 48 : 0,
                    opacity: isScrolled ? 0.9 : 1
                  }}
                  onClick={scrollToTop}
                >
                  <div className="font-medium text-white text-[24px] md:text-[28px] leading-[36px] md:leading-[44.8px] font-plus-jakarta hover:text-white/90 transition-colors">
                    Next AI
                  </div>
                </motion.div>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex justify-end pr-4">
                <Button 
                  variant="ghost" 
                  className="text-white hover:bg-white/10" 
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    className="w-6 h-6"
                  >
                    {mobileMenuOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    )}
                  </svg>
                </Button>
              </div>

              {/* Navigation - Desktop */}
              <div className="hidden md:block px-4">
                <NavigationMenu>
                  <NavigationMenuList className="flex items-center">
                    {navItems.map((item, index) => (
                      <Fragment key={item.id}>
                        <NavigationMenuItem>
                          <NavigationMenuLink
                            className="font-light text-white text-base leading-[25.6px] px-4 py-3 font-plus-jakarta hover:text-white/80 transition-colors cursor-pointer"
                            onClick={() => scrollToSection(item.id)}
                          >
                            {item.label}
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                        {index < navItems.length - 1 && (
                          <Separator
                            orientation="vertical"
                            className="h-[26px] bg-[url(public/svg469604590-159.svg)] bg-[100%_100%]"
                          />
                        )}
                      </Fragment>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </div>

              {/* CTA Button - Desktop */}
              <div className="hidden md:flex pr-0 justify-end">
                <motion.div 
                  className="transition-all duration-700 ease-out"
                  animate={{
                    x: isScrolled ? -48 : 0,
                    opacity: isScrolled ? 0.9 : 1
                  }}
                >
                  <Button className="h-12 bg-white text-next-ai-3framerwebsiteblack-pearl rounded-md hover:bg-white/90 transition-colors">
                    <span className="font-bold text-sm tracking-[-0.04px] leading-[18px] font-plus-jakarta">
                      Get Started
                    </span>
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute top-[72px] left-4 right-4 bg-black/95 backdrop-blur-xl rounded-xl border border-white/10 overflow-hidden"
            >
              <div className="py-4">
                {navItems.map((item, index) => (
                  <Fragment key={item.id}>
                    <div
                      className="px-6 py-3 text-white font-plus-jakarta hover:bg-white/10 transition-colors cursor-pointer"
                      onClick={() => scrollToSection(item.id)}
                    >
                      {item.label}
                    </div>
                    {index < navItems.length - 1 && (
                      <Separator className="bg-white/10" />
                    )}
                  </Fragment>
                ))}
                <div className="px-4 pt-4">
                  <Button className="w-full h-12 bg-white text-next-ai-3framerwebsiteblack-pearl rounded-md hover:bg-white/90 transition-colors">
                    <span className="font-bold text-sm tracking-[-0.04px] leading-[18px] font-plus-jakarta">
                      Get Started
                    </span>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
