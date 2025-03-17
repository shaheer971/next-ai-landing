import { ArrowRightIcon, CheckIcon } from "lucide-react";
import { Card, CardContent } from "../../../../components/ui/card";
import TiltedCard from "../../../../components/ui/tilted-card";
import { motion } from "framer-motion";

// Feature card data for mapping
const featureCards = [
  {
    id: 1,
    title: "Versatile account management",
    features: [
      "Instant payment insights",
      "User-friendly tracking interface",
      "Clear financial transaction visibility",
    ],
    imageSrc: "public/zbbrxoh5ltj2lomkn2ftldkisdm-png.png",
  },
  {
    id: 2,
    title: "Unified financial dashboard",
    features: [
      "Track income, send invoices, and pay bills",
      "Bring clarity to chaos with real-time insights",
      "Grasp your business like never before",
    ],
    imageSrc: "public/lbwbwqcbibki8qd2dnoy7ldfe-png.png",
  },
  {
    id: 3,
    title: "Versatile account management",
    features: [
      "Manage multiple accounts easily",
      "Add numerous bank cards",
      "Bank diversity in one platform",
    ],
    imageSrc: "public/c4w8wfvr6ox4s5o52h6k3bzoxyk-png.png",
  },
];

export const DataWrapperSection = (): JSX.Element => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full flex flex-col items-center gap-8 py-16"
    >
      {featureCards.map((card, index) => (
        <motion.div
          key={card.id}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 * index }}
        >
          <Card
            className="w-full max-w-[1224px] h-[568px] bg-next-ai-3framerwebsitewoodsmoke rounded-3xl border border-solid border-[#ffffff1a] relative overflow-hidden"
          >
            <CardContent className="p-0 h-full">
              <div className="relative h-full rounded-3xl flex">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 * index }}
                  className="flex-1 p-20 flex flex-col justify-center"
                >
                  <h2 className="text-[43px] text-white font-medium [font-family:'DM_Sans',Helvetica] tracking-[-1.72px] leading-[51.6px] mb-12">
                    {card.title}
                  </h2>

                  <div className="space-y-6 mb-12">
                    {card.features.map((feature, featureIndex) => (
                      <motion.div 
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 * featureIndex + 0.4 * index }}
                        className="flex items-center gap-10"
                      >
                        <div className="w-6 h-6 flex items-center justify-center">
                          <CheckIcon className="w-6 h-6 text-white" />
                        </div>
                        <span className="[font-family:'Inter',Helvetica] font-light text-next-ai-3framerwebsitewhite-70 text-lg tracking-[0.18px] leading-[28.8px]">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.6 * index }}
                    className="flex items-center mt-6 cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    <span className="[font-family:'Inter',Helvetica] font-bold text-white text-lg tracking-[-0.06px] leading-6 mr-2">
                      Find out more
                    </span>
                    <ArrowRightIcon className="w-[15px] h-[15px] text-white" />
                  </motion.div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 * index }}
                  className="w-[520px] h-[520px] my-6 mr-6 rounded-2xl overflow-hidden border border-solid border-[#222222]"
                >
                  <TiltedCard
                    containerHeight="520px"
                    containerWidth="520px"
                    rotateAmplitude={8}
                    scaleOnHover={1.05}
                  >
                    <div
                      className="h-full w-full rounded-2xl bg-cover bg-center bg-no-repeat"
                      style={{ 
                        backgroundImage: `url(${card.imageSrc})`,
                        transform: 'scale(1.1)'
                      }}
                    />
                  </TiltedCard>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.section>
  );
};
