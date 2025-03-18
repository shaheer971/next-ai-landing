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
      id="about"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-[1224px] mx-auto py-8 md:py-16 px-4 md:px-0"
    >
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center text-white font-plus-jakarta text-[28px] md:text-[40px] font-medium tracking-[-0.5px] md:tracking-[var(--next-ai-3-framer-website-semantic-heading-2-letter-spacing)] leading-[1.2] md:leading-[var(--next-ai-3-framer-website-semantic-heading-2-line-height)] mb-8 md:mb-16"
      >
        Unparalleled advantages
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
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
                className="bg-black/10 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl hover:border-white/20 transition-colors"
              >
                <CardContent className="p-6 md:p-8">
                  {feature.icon ? (
                    <div className="w-12 h-12 md:w-14 md:h-14 mb-6 md:mb-8">
                      <img
                        src={feature.icon}
                        alt={feature.title}
                        className="w-full h-full"
                      />
                    </div>
                  ) : (
                    <div 
                      className="w-12 h-12 md:w-14 md:h-14 mb-6 md:mb-8 rounded-lg bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${feature.backgroundImage})`,
                      }}
                    />
                  )}

                  <h3 className="text-white font-plus-jakarta text-xl md:text-2xl font-medium tracking-[-0.4px] md:tracking-[-0.8px] leading-[1.2] md:leading-[1.3] mb-3 md:mb-4">
                    {feature.title}
                  </h3>

                  <p className="text-white/70 font-plus-jakarta text-base md:text-lg font-light leading-[1.5] md:leading-[1.6]">
                    {feature.description.map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < feature.description.length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                </CardContent>
              </Card>
            </TiltedCard>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
