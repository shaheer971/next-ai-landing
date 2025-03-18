import { Card, CardContent, CardFooter, CardHeader } from "../../../../components/ui/card";
import { motion } from "framer-motion";

export const PricingPlansSection = (): JSX.Element => {
  // Plan data for mapping
  const plans = [
    {
      name: "Essential",
      price: "$7.99",
      features: [
        "Personal finance features",
        "Basic budget tracking",
        "Email support",
      ],
      bgClass: "bg-[#0F0F10]",
    },
    {
      name: "Premium",
      price: "$15.99",
      features: [
        "Advanced financial tools",
        "Editable budget categories",
        "Priority customer support",
        "SMS notifications",
      ],
      bgClass: "bg-[#0F0F10]",
    },
    {
      name: "Business",
      price: "$29.99",
      features: [
        "Multi-entity management",
        "Streamlined tax assistance",
        "Team collaboration features",
        "Enhanced security options",
        "Phone and email support",
      ],
      bgClass: "bg-gradient-to-br from-[#8A2BE2] to-[#FF6B00]",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      id="pricing"
      className="w-full py-8 md:py-20 flex flex-col items-center px-4 md:px-0"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="font-plus-jakarta text-[28px] md:text-[40px] font-medium text-white text-center mb-8 md:mb-16"
      >
        Pricing plans
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-[1300px] mx-auto w-full"
      >
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
          >
            <Card
              className={`w-full h-full rounded-[16px] md:rounded-[20px] border border-white/10 ${plan.bgClass} overflow-hidden`}
            >
              <CardHeader className="pt-6 md:pt-8 pb-0 px-6 md:px-8">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="font-plus-jakarta font-normal text-white text-base mb-3 md:mb-4"
                >
                  {plan.name}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  className="flex items-baseline"
                >
                  <span className="font-plus-helvetica text-[32px] md:text-[40px] font-medium text-white">
                    {plan.price}
                  </span>
                  <span className="ml-1 font-plus-helvetica text-sm text-white/60">
                    / month
                  </span>
                </motion.div>
              </CardHeader>

              <CardContent className="px-6 md:px-8 py-6 md:py-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: 0.8 + index * 0.1 + featureIndex * 0.05,
                      }}
                      className="flex items-center gap-3"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 md:w-5 md:h-5 flex-shrink-0"
                      >
                        <path
                          d="M16.6663 5L7.49967 14.1667L3.33301 10"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="font-plus-jakarta text-sm md:text-base text-white/80">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="px-6 md:px-8 pb-6 md:pb-8 pt-0">
                <motion.button
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full h-12 md:h-14 bg-white/10 hover:bg-white/15 text-white font-plus-jakarta font-medium text-sm md:text-base rounded-lg transition-colors duration-200"
                >
                  Get started
                </motion.button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};
