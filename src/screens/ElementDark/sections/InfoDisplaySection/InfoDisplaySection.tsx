import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import TiltedCard from "../../../../components/ui/tilted-card";
import { motion } from "framer-motion";

// Define feature data for mapping
const featuresData = [
  {
    id: 1,
    icon: "public/ahzbts6zsmy0wilnj3binobz1ig-svg.svg",
    title: "Exact books",
    description: [
      "Maintain precise and accurate financial records",
      "effortlessly",
    ],
  },
  {
    id: 2,
    icon: "public/qeopqydwsha7fy5rlwwp0mbhxns-svg.svg",
    title: "Tax ease",
    description: [
      "Experience relief from tax-related complexities and",
      "stress",
    ],
  },
  {
    id: 3,
    icon: "public/hrxmsvc8scd886fxc5uedqd0y-svg.svg",
    title: "Multi support",
    description: [
      "Seamlessly manage multiple entities with",
      "comprehensive support",
    ],
  },
  {
    id: 4,
    icon: "public/emhzjzdl3phta27tbp9ws9bmsi-svg.svg",
    title: "CPA Assistance",
    description: [
      "Receive on-demand support from certified public",
      "accountants",
    ],
  },
  {
    id: 5,
    icon: "public/tm3rffnablflqht6s6rdnr34by-svg.svg",
    title: "Dynamic account",
    description: [
      "Transform your financial management with agile",
      "accounting solutions",
    ],
  },
  {
    id: 6,
    icon: null, // Special case with background image
    title: "Live reports",
    description: [
      "Engage with insightful and interactivefinancial",
      "analyses",
    ],
    backgroundImage: "public/clip-path-group.png",
  },
];

export const InfoDisplaySection = (): JSX.Element => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-[1224px] mx-auto py-16"
    >
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center text-white font-plus-jakarta text-[40px] font-medium tracking-[var(--next-ai-3-framer-website-semantic-heading-2-letter-spacing)] leading-[var(--next-ai-3-framer-website-semantic-heading-2-line-height)] mb-16"
      >
        Unparalleled advantages
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuresData.map((feature, index) => (
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <TiltedCard
              containerHeight="auto"
              containerWidth="100%"
              rotateAmplitude={8}
              scaleOnHover={1.05}
            >
              <Card 
                className="bg-black/10 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-white/20 transition-colors"
              >
                <CardContent className="flex flex-col items-center p-8">
                  <div className="w-16 h-[67px] mb-8 overflow-hidden">
                    {feature.backgroundImage ? (
                      <div className="relative w-[67px] h-[67px] -left-0.5 bg-[url(public/clip-path-group.png)] bg-[100%_100%]" />
                    ) : (
                      <img
                        className="w-[67px] h-[67px] -left-0.5"
                        alt={`${feature.title} icon`}
                        src={feature.icon}
                      />
                    )}
                  </div>

                  <h3 className="font-plus-jakarta font-medium text-white text-[20px] text-center tracking-[var(--next-ai-3-framer-website-semantic-heading-6-letter-spacing)] leading-[var(--next-ai-3-framer-website-semantic-heading-6-line-height)] whitespace-nowrap mb-3">
                    {feature.title}
                  </h3>

                  <div className="px-4 w-full">
                    {feature.description.map((line, index) => (
                      <p
                        key={index}
                        className="font-plus-jakarta font-light text-next-ai-3framerwebsitewhite-70 text-base text-center tracking-[0.16px] leading-[25.6px] break-words"
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TiltedCard>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
