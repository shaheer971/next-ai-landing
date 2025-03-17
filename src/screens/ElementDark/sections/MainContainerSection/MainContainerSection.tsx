import { Fragment, useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";
import { Separator } from "../../../../components/ui/separator";
import { motion } from "framer-motion";

export const MainContainerSection = (): JSX.Element => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "Features", id: "features" },
    { label: "Pricing", id: "pricing" },
    { label: "About", id: "about" },
    { label: "Blog", id: "blog" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-[1180px] mx-auto">
        {/* Width of floating navbar can be adjusted by changing px-6 to px-8, px-10 etc. for wider margins */}
        <div className={`transition-all duration-700 ease-out ${isScrolled ? 'mt-6 px-12' : 'pt-4'}`}>
          <div className={`h-20 transition-colors duration-700 ease-out ${
            isScrolled 
              ? 'bg-black/20 backdrop-blur-xl rounded-2xl border border-white/5' 
              : 'bg-next-ai-3framerwebsiteblack-pearl'
          }`}>
            <div className="h-full grid grid-cols-[1fr_auto_1fr] items-center gap-6">
              {/* Logo */}
              <div className="pl-">
                <motion.div 
                  className="transition-all duration-700 ease-out"
                  animate={{
                    x: isScrolled ? 48 : 0,
                    opacity: isScrolled ? 0.9 : 1
                  }}
                >
                  <div className="font-medium text-white text-[28px] leading-[44.8px] font-plus-jakarta">
                    Next AI
                  </div>
                </motion.div>
              </div>

              {/* Navigation - Always centered */}
              <div className="px-4">
                <NavigationMenu>
                  <NavigationMenuList className="flex items-center">
                    {navItems.map((item, index) => (
                      <Fragment key={item.id}>
                        <NavigationMenuItem>
                          <NavigationMenuLink
                            className="font-light text-white text-base leading-[25.6px] px-4 py-3 font-plus-jakarta hover:text-white/80 transition-colors"
                            href={`#${item.id}`}
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

              {/* CTA Button */}
              <div className="pr- flex justify-end">
                <motion.div 
                  className="transition-all duration-700 ease-out"
                  animate={{
                    x: isScrolled ? -48 : 0,
                    opacity: isScrolled ? 0.9 : 1
                  }}
                >
                  <Button className="h-12 bg-white text-next-ai-3framerwebsiteblack-pearl rounded-md hover:bg-white/90 transition-colors">
                    <span className="font-bold text-sm tracking-[-0.04px] leading-[18px] font-plus-jakarta">
                      Start free trial
                    </span>
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
