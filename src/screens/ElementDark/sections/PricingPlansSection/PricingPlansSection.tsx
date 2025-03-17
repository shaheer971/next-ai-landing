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
      className="w-full py-20 flex flex-col items-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="font-plus-jakarta text-[40px] font-medium text-white text-center mb-16"
      >
        Pricing plans
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1300px] mx-auto px-6"
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
              className={`w-full h-full rounded-[20px] border border-white/10 ${plan.bgClass} overflow-hidden`}
            >
              <CardHeader className="pt-8 pb-0 px-8">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="font-plus-jakarta font-normal text-white text-base mb-4"
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
                  <span className="font-plus-helvetica text-[40px] font-medium text-white">
                    {plan.price}
                  </span>
                  <span className="ml-1 font-plus-helvetica text-sm text-white/60">
                    / month
                  </span>
                </motion.div>
              </CardHeader>

              <CardContent className="pt-8 px-8">
                <motion.ul
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  className="space-y-4"
                >
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
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
                      >
                        <path
                          d="M16.6668 5L7.50016 14.1667L3.3335 10"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="font-plus-jakarta text-sm font-light text-white/60">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
              </CardContent>

              <CardFooter className="p-8">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                  className={`w-full h-12 rounded-md font-plus-jakarta text-sm font-medium
                    ${
                      index === 2
                        ? "bg-white text-black hover:bg-white/90"
                        : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
                    }`}
                >
                  Start free trial
                </motion.button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};
